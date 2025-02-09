import React from 'react'
import { Card } from 'react-bootstrap';

export default ({
    title,
    subTitle,
    badge,
    body,
    isHighlighted
}) => (< div className="col mb-4 skill-card" >
    <Card className={isHighlighted ? "highlight-card" : ""}>
        <Card.Body >
            <div>
                <div>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Card.Subtitle>
                        {badge && <span className={"badge badge-pill badge-info " + badge.className}>{badge.text}</span>}
                        {subTitle && <span className="sub-title">{subTitle}</span>}
                    </Card.Subtitle>
                    <Card.Body>
                        {body}
                    </Card.Body>
                </div>
            </div>
        </Card.Body>
    </Card>
</div >)