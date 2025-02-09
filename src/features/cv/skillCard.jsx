import React from 'react'
import { Card } from 'react-bootstrap';

const SkillCard = ({
    title,
    subTitle,
    badge,
    icon = null,
    iconSrc,
    isHighlighted
}) => (< div className="col mb-4 skill-card" >
    <Card className={isHighlighted ? "highlight-card" : ""}>
        <Card.Body >
            <div>
                {(iconSrc || icon) &&
                    <div className="icon-container" >
                        {icon || <img src={iconSrc} className="card-icon" />}
                    </div>}
                <div>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Card.Subtitle>
                        {badge && <span className={"badge badge-pill badge-info " + badge.className}>{badge.text}</span>}
                        {subTitle && <span className="sub-title">{subTitle}</span>}
                    </Card.Subtitle>
                </div>
            </div>
        </Card.Body>
    </Card>
</div >)

export default SkillCard;