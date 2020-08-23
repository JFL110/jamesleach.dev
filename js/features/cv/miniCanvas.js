import React, {  useState, useRef } from 'react'
import CanvasDraw from "react-canvas-draw";
import VisibilitySensor from "react-visibility-sensor";
import brushLines from './brushSvg'
const scaleDown = 3;

export default () => {
    const [drawingRendered, setDrawingRendered] = useState(false);
    const canvasRef = useRef();
    const onVisibilityChange = visible => {
        if (visible && !drawingRendered) {
            setTimeout(() => {
                canvasRef.current?.loadSaveData(JSON.stringify({
                    lines: brushLines(),
                    width: 1200 * scaleDown,
                    height: 800 * scaleDown
                }));
            }, 500);
            setDrawingRendered(true);
        }
    };

    return <VisibilitySensor partialVisibility onChange={onVisibilityChange}>
        <div className="mini-canvas-container">
            <CanvasDraw
                canvasWidth={1000}
                canvasHeight={800}
                ref={canvasRef}
                loadTimeOffset={1}
            />
        </div>
    </VisibilitySensor>
}