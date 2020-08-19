import React from 'react'
import CanvasDraw from "react-canvas-draw";

export default () =>
    <div className="mini-canvas-container">
        <CanvasDraw
            canvasWidth={1000}
            canvasHeight={800}
        />
    </div>
