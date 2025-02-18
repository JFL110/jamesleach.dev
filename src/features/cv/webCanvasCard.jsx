import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import MiniCanvasLazy, { miniCanvasPlaceholder } from './miniCanvasLazy'
import LoadOnVisible from './loadOnVisibleOrDelay'
import { Button, Card } from 'react-bootstrap';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons'

export default () => {
    return <Card className='webcanvas-card  project-card'>
        <Card.Body>
            <div>
                <div className='project-card-img' >
                    <MiniCanvasLazy />
                </div>
                <div className='card-content'>
                    <Card.Title>
                        Spring Websockets - Web Canvas
                    </Card.Title>
                    <Card.Subtitle>
                        Demo application using Spring Websockets to synchronise online drawing canvases.
                    </Card.Subtitle>
                    <h6>
                        <p>
                            This is a small demonstration of building a functional websocket application without huge amounts of code,
                            made possible with Spring. The app communicates with a React frontend to send and receive messages as a user draws
                            on a canvas. Changes are propagated to all users, showing updates in real-time.
                        </p>
                        <p>
                            Continuous integration is used to build, test and deploy the app automatically to AWS ECS.
                        </p>
                        <p>
                            Take a look at the source repositories for more information.
                            To test the app, open it in two windows or devices and navigate to the same canvas in both.
                        </p>
                    </h6>
                    <h6>
                    </h6>
                    <div className="lower-button-group">
                        <Button as="a" href="http://d1kzdlgex69htr.cloudfront.net/random" target="_blank">
                            <FontAwesomeIcon icon={faPaintBrush} />View app
                        </Button>
                        <Button as="a" href="https://github.com/JFL110/jamesleach.dev-backend-monorepo/tree/main/live-drawing-canvas-container" target="_blank">
                            <FontAwesomeIcon icon={faGithub} />Backend source
                        </Button>
                        <Button as="a" href="https://github.com/JFL110/spring-websockets-example-frontend" target="_blank"  >
                            <FontAwesomeIcon icon={faGithub} />Frontend source
                        </Button>
                    </div>
                </div>
            </div>
        </Card.Body>
    </Card>
}