import React from 'react'
import { dispatchPush } from 'repileux'
import MapLazy from '../map/mapLazy'
import Loading from '../loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarked } from '@fortawesome/free-solid-svg-icons/faMapMarked'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { Button, Card } from 'react-bootstrap';
import LoadOnVisible from './loadOnVisibleOrDelay'

const mapLoadingPlaceholder = <Loading className="mini-map full-height" />

export default () => {

    const onViewFull = () => dispatchPush('/where-are-they')
    //
    return <Card className='map-card project-card'>
        <Card.Body>
            <div>
                <LoadOnVisible
                    placeholder={mapLoadingPlaceholder}
                    componentFunc={() => <MapLazy isMiniMap loadingComponent={mapLoadingPlaceholder} />}
                />
                <div className='card-content'>
                    <Card.Title>
                        My location map
                    </Card.Title>
                    <Card.Subtitle>
                        Map to keep family and friends updated when my partner and I have been abroad.
                    </Card.Subtitle>
                    <h6>
                        <p>
                            This project combines an Android app, AWS Lambda hosted Java backend and Javascript React frontend to collect location
                            information and display it on a map with a selection of photos.
                        </p>
                        <p>
                            Code is deployed and tested automatically on commit of new versions using Github Actions and Terraform.
                            Performance is improved by periodically digesting the location data into a JSON file and serving it statically to the frontend from S3.
                        </p>
                        <p>
                            Take a look at the source repositories for more information.
                        </p>
                    </h6>
                    <h6>
                    </h6>
                    <div className="lower-button-group">
                        <Button onClick={onViewFull} ><FontAwesomeIcon icon={faMapMarked} />
                            View map
                        </Button>
                        <Button as="a" href="https://github.com/JFL110/where-are-they-aws-app" target="_blank">
                            <FontAwesomeIcon icon={faGithub} />Backend source
                        </Button>
                        <Button as="a" href="https://github.com/JFL110/jamesleach.dev" target="_blank"  >
                            <FontAwesomeIcon icon={faGithub} />Frontend source
                        </Button>
                    </div>
                </div>
            </div>
        </Card.Body>
    </Card>
}