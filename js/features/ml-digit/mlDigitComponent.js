import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive';
import CanvasDraw from "react-canvas-draw";
import { Row } from 'react-bootstrap';
import { connectToOpState } from 'repileux'

import mlDigitNetState from './mlDigitNetState'
import { DesktopBarGraph, MobileBarGraph, probabilitiesToChartData } from './mlDigitGraphs';
import ClearButton from './clearButton'
import canvasToMnistFormat from './canvasToMnistFormat'
import { size as mnistSize } from './mnistConfiguration'
import { Blurb, MoreDetails } from './mlDigitText'

import './mlDigitStyles.scss'

// Constants
const updateDelayMs = 400;
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
        const showMobileGraph = useMediaQuery({ query: `(min-width: 1200px)` });
        return showMobileGraph
            ? <DesktopBarGraph
                width={mnistSize * sizeMultiplier}
                height={mnistSize * sizeMultiplier}
                data={probabilitiesToChartData(mlDigitData?.value?.labelProbabilities)}
            />
            : <MobileBarGraph
                width={mnistSize * sizeMultiplier}
                data={probabilitiesToChartData(mlDigitData?.value?.labelProbabilities, true)}
            />;
    });

export default () => {
    // Shrink graph and canvas on mobile
    const isSmallMobile = useMediaQuery({ query: `(max-width: 700px)` });
    const sizeMultiplier = isSmallMobile ? 13 : 17;

    const canvasRef = useRef();
    const queueUpdate = () => !timeoutHandle && (timeoutHandle = setTimeout(() => processChange(sizeMultiplier, canvasRef), updateDelayMs));
    const clear = () => {
        canvasRef.current?.clear();
        mlDigitNetState.clear();
    }

    return <React.Fragment>
        <div className="title">
            <h2>Digit Recognition</h2>
            <p className="ml-desktop-only">
                <Blurb />
                <br /><br />
                <MoreDetails />
            </p>
            <p className="ml-mobile-only">
                Try drawing on the canvas below. Full details and source on <a href="https://github.com/JFL110/deployed-ml" >Github</a >.
            </p>
        </div>
        <Row className='flex-container'>
            <div className="d-flex flex-wrap">
                <div
                    className='canvas-container'
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
            <Blurb />
        </p>
    </React.Fragment>
}