import React from 'react'

export default ({
    date,
    title,
    subTitle,
    content,
    isMinor
}) => {
    if(isMinor){
        return (null);
    }

    return <div className={"timeline-item " + (isMinor ? "timeline-minor" : "timeline-major")}>
        <div className="timeline-img" />
        <div className="timeline-content">
            <h2 className="timeline-title">{title}</h2>
            {subTitle && <h4 className="timeline-subtitle">{subTitle}</h4>}
            <span className="badge badge-pill badge-info">{date}</span>
            {content && content}
        </div>
    </div>
}