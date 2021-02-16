import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faRobot } from '@fortawesome/free-solid-svg-icons/faRobot'
import { dispatchPush } from 'repileux'
import { Button, Card } from 'react-bootstrap';

import mnistImge from '../ml-digit/mnist-cover.png'


export default () => {
    return <Card className='ml-digit-card project-card'>
        <Card.Body>
            <div>
                <div
                    onClick={() => dispatchPush('./ml-digit')}
                    className='project-card-img background-card-img clickable'
                    style={{ backgroundImage: `url('${mnistImge}')` }} >
                </div>
                <div className='card-content'>
                    <Card.Title>
                        Deployed Neural Networks
                    </Card.Title>
                    <Card.Subtitle>
                        A quick demo of a neural network for digit recognition implemented using Java&apos;s Deeplearning4j.
                    </Card.Subtitle>
                    <h6>
                        <p>
                            The simple feed forward network is trained on the MNIST dataset of 60,000 hand-drawn images of the digits zero to nine,
                            commonly regarded as the &apos;hello world&apos; dataset of machine learning.
                        </p>
                        <p>
                            The network is trained using a Spring Boot command line application and the serialized network is uploaded to AWS S3.
                        </p>
                        <p>
                            A separate Spring Boot REST application reads the serialized network and uses it to classify images input as pixel arrays.
                            Github Actions is used to test and package the REST application as a Docker image and deploy to an AWS Elastic Container Service cluster.
                        </p>
                    </h6>
                    <h6>
                    </h6>
                    <div className="lower-button-group">
                        <Button as="a" href="./ml-digit">
                            <FontAwesomeIcon icon={faRobot} />View demo
                        </Button>
                        <Button as="a" href="https://github.com/JFL110/deployed-ml" target="_blank">
                            <FontAwesomeIcon icon={faGithub} />Backend source
                        </Button>
                    </div>
                </div>
            </div>
        </Card.Body>
    </Card>
}