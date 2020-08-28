import React, { useState } from 'react'
import VisibilitySensor from "react-visibility-sensor";

export default ({
    placeholder,
    componentFunc
}) => {
    // Load the component the first time it becomes visible
    const [hasEverBeenVisible, setHasEverBeenVisible] = useState(false);
    const onVisibilityChange = v => { if (v) setHasEverBeenVisible(true); }

    return <VisibilitySensor partialVisibility onChange={onVisibilityChange}>
        {(isVisible) => ((isVisible.isVisible || hasEverBeenVisible) ? componentFunc() : placeholder)}
    </VisibilitySensor>
}