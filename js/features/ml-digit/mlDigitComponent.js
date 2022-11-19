import React, { useRef, useState } from 'react'
import { useMediaQuery } from "react-responsive"
import CanvasDraw from "react-canvas-draw"
import { Row } from 'react-bootstrap'
import { connectToOpState } from 'repileux'

import mlDigitNetState from './mlDigitNetState'
import { DesktopBarGraph, MobileBarGraph, probabilitiesToChartData } from './mlDigitGraphs'
import ClearButton from './clearButton'
import canvasToMnistFormat from './canvasToMnistFormat'
import { size as mnistSize } from './mnistConfiguration'
import { Blurb, MoreDetails, MobileTopSummary } from './mlDigitText'
import { useWindowWidth } from '@react-hook/window-size'

import './mlDigitStyles.scss'

// Constants
const updateDelayMs = 200;
const maxSizeMultiplier = 17;
const minSizeMultiplier = 8;
const brushRadius = 12;

// State
var timeoutHandle = null;
var lastPixels = null;

// Send pixel data to the endpoint in response to a canvas update
const processChange = (sizeMultiplier, canvasRef) => {
    // Clear timeout and avoid duplicate requests
    timeoutHandle = null;
    if (mlDigitNetState.get().isInProgress()) {
        timeoutHandle = setTimeout(() => processChange(sizeMultiplier, canvasRef), updateDelayMs);
        return;
    }

    // Read canvas data
    const fixedData = canvasRef.current.canvas.drawing.getContext('2d').getImageData(0, 0, sizeMultiplier * mnistSize, sizeMultiplier * mnistSize).data;
    const tempData = canvasRef.current.canvas.temp.getContext('2d').getImageData(0, 0, sizeMultiplier * mnistSize, sizeMultiplier * mnistSize).data;

    // Canvas -> 28x28 pixel grid
    const pixels = canvasToMnistFormat(sizeMultiplier, fixedData, tempData);

    // Only update if there was a change and there is data to send
    if (pixels && lastPixels != pixels) {
        lastPixels = pixels;
        mlDigitNetState.calculate({ pixels: pixels })
    }
}

// Mobile or desktop graph - invert mobile graph data
const Charts = connectToOpState(mlDigitNetState,
    ({ sizeMultiplier, mlDigitData }) => {
        const showMobileGraph = useMediaQuery({ query: `(min-width: 1201px)` });

        // Track errors
        const [lastRequestWasError, setLastRequestWasError] = useState(false);
        if (!mlDigitData.isInProgress() && lastRequestWasError !== mlDigitData.wasError()) {
            setLastRequestWasError(mlDigitData.wasError());
        }

        return showMobileGraph
            ? <DesktopBarGraph
                error={lastRequestWasError}
                width={mnistSize * sizeMultiplier}
                height={mnistSize * sizeMultiplier}
                data={probabilitiesToChartData(mlDigitData?.value?.labelProbabilities)}
            />
            : <MobileBarGraph
                error={lastRequestWasError}
                width={mnistSize * sizeMultiplier}
                data={probabilitiesToChartData(mlDigitData?.value?.labelProbabilities, true)}
            />
    });

export default () => {
    // Shrink graph and canvas on mobile
    const widowWidth = useWindowWidth()
    const sizeMultiplier =
        Math.max(minSizeMultiplier,
            Math.min(maxSizeMultiplier,
                Math.floor(widowWidth / 36)));

    const canvasRef = useRef();
    const queueUpdate = () => !timeoutHandle && (timeoutHandle = setTimeout(() => processChange(sizeMultiplier, canvasRef), updateDelayMs));
    const clear = () => {
        canvasRef.current?.clear();
        mlDigitNetState.clear();
    }

    return <>
        <div className="title">
            <h2>Digit Recognition</h2>
            <p className="ml-desktop-only">
                <Blurb />
                <br /><br />
                <MoreDetails />
            </p>
            <p className="ml-mobile-only">
                <MobileTopSummary />
            </p>
        </div>
        <Row className='flex-container'>
            <div className="d-flex flex-wrap">
                <div
                    className='canvas-container'
                    onTouchMove={queueUpdate}
                    onMouseMove={e => e.buttons && queueUpdate()}
                >
                    <ClearButton onClick={clear} />
                    <CanvasDraw
                        className='digit-canvas'
                        onChange={queueUpdate}
                        canvasWidth={sizeMultiplier * mnistSize}
                        canvasHeight={sizeMultiplier * mnistSize}
                        ref={canvasRef}
                        brushRadius={brushRadius}
                        brushColor={'#000000'}
                    />
                </div>
            </div>
            <Charts sizeMultiplier={sizeMultiplier} />
        </Row>
        <p className="ml-mobile-only blurb-bottom">
            <Blurb mobile />
        </p>
    </>
}