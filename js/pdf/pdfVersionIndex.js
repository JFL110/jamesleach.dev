import React from 'react'
import { render } from 'react-dom'
import QRCode from 'qrcode.react'
import { faEnvelope, faPhone, faExternalLinkAlt, faArrowRight, faTools, faMountain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Card } from 'react-bootstrap';
import Text from '../text'
import './pdf-styles.scss'

const TimelineItem = ({
    title,
    subTitle,
    date,
    content,
    pdfContent = null,
    isLast = false
}) => <div className={"timeline-item " + (isLast ? "timeline-last" : "timeline-not-last")}>
        <div className="timeline-img" />
        <div className="timeline-content">
            <span className="badge badge-pill badge-info">{date}</span>
            <h4 className="timeline-title">{title}</h4>
            {subTitle && <h4 className="timeline-subtitle">{subTitle}</h4>}
            {pdfContent || content}
        </div>
    </div>

const SkillItem = ({ title }) => <Card>
    <Card.Body>
        <Card.Title>{title}</Card.Title>
    </Card.Body>
</Card>

const SkillContent = () => <div className="skill-card-group">
    <SkillItem title="Java" />
    <SkillItem title="AWS" />
    <SkillItem title="SQL" />
    <SkillItem title="NoSQL" />
    <SkillItem title="Netsuite" />
    <SkillItem title="C#" />
    <SkillItem title="Javascript" />
    <SkillItem title="React + Redux" />
    <SkillItem title="Webpack" />
    <SkillItem title="HTML" />
    <SkillItem title="Sass" />
    <SkillItem title="GitHub Actions" />
</div>

const HobbyItem = ({
    subTitle,
    icon }) => <div><Card>
        <Card.Body>
            <div>
                <div className="card-icon" >
                    <FontAwesomeIcon icon={icon} />
                </div>
                <div>
                    <Card.Subtitle>
                        <span className="sub-title">{subTitle}</span>
                    </Card.Subtitle>
                </div>
            </div>
        </Card.Body>
    </Card>
    </div>

render(
    <main>
        <div className="pdf-head">
            <div className="name-heading-container">
                <h1 className="name-heading">{Text.name}</h1>
                <h2>{Text.title}</h2>
            </div>
            <div className="qr-code-container">
                <div className="contact-details-container">
                    <span><FontAwesomeIcon icon={faEnvelope} />contact@jamesleach.dev</span>
                    <br />
                    <span><FontAwesomeIcon icon={faExternalLinkAlt} />jamesleach.dev/cv <FontAwesomeIcon icon={faArrowRight} /></span>
                    <br />
                    <span><FontAwesomeIcon icon={faPhone} />+44 946 496 228</span>
                    <br />
                    <span><FontAwesomeIcon icon={faGithub} />JFL110</span>
                </div>
                <div>
                    <QRCode
                        className="link-qr-code"
                        value="https://www.jamesleach.dev/cv" />
                </div>
            </div>
        </div >
        <hr />
        <div className="pdf-body">
            <div className="intro-text">
                {Text.pdfIntro}
            </div>

            <div className="body-column-one">

                <h3>Development experience</h3>

                <TimelineItem
                    {...Text.freelance}
                />

                <TimelineItem
                    {...Text.alfa}
                    isLast
                />

                <h4 className="extra-space">Technologies</h4>

                <SkillContent />

            </div>
            <div className="body-column-two">

                <h3>Other experience</h3>

                <TimelineItem
                    {...Text.timeOff}
                />

                <TimelineItem
                    {...Text.colombia}
                />

                <TimelineItem
                    {...Text.imperial}
                    isLast
                />

                <h4 className="hobbies-heading">Hobbies</h4>
                <div className="hobby-card-group">
                    <HobbyItem
                        subTitle={<React.Fragment>Car mechanics, <br />robotics, inventing</React.Fragment>}
                        icon={faTools} />
                    <HobbyItem
                        subTitle={<React.Fragment> Hiking, camping <br />running </React.Fragment>}
                        icon={faMountain} />
                </div>
            </div>
        </div>
    </main>,
    document.getElementById('root')
);