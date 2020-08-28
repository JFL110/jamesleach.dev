import React, { useState, useEffect } from 'react'
import VisibilitySensor from "react-visibility-sensor";

const showAfterDelayMs = 6 * 1000;

export default ({
    placeholder,
    componentFunc
}) => {
    // Load the component the first time it becomes visible
    const [triggered, setTriggered] = useState(false);
    const onVisibilityChange = v => { if (v) setTriggered(true); }

    // Queue a trigger to load it anyway after a delay
    useEffect(() => setTimeout(() => setTriggered(true), showAfterDelayMs), []);

    return <VisibilitySensor partialVisibility onChange={onVisibilityChange}>
        {(isVisible) => ((isVisible.isVisible || triggered) ? componentFunc() : placeholder)}
    </VisibilitySensor>
}