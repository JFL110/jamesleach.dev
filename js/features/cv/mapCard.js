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

    const onViewFull = () => dispatchPush('/travel-map')
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
                        My travel map
                    </Card.Title>
                    <Card.Subtitle>
                        Map showing anonymised location history data and photos.
                    </Card.Subtitle>
                    <h6>
                        <p>
                            This project was originally designed to keep friends and family updated with my live location while travelling.
                            Since then, it has been converted into a static view of my location history. The data is anonymised by chunking the globe into
                            fixed-size latitude and longitude increments and the concept of time and frequency.
                        </p>
                        <p>
                            The source data is taken from a Google Takeout download containing location history and photos and stored in DynamoDB.
                            This data is periodically updated, combined with some public photos and digested into a JSON file hosted in S3. 
                        </p>
                        <p>
                            A CI and CD pipeline tests the code and builds a Docker image, which is moved through Staging and Production ECS environments.
                            Take a look at the source repositories for more information.
                        </p>
                    </h6>
                    <h6>
                    </h6>
                    <div className="lower-button-group">
                        <Button onClick={onViewFull} ><FontAwesomeIcon icon={faMapMarked} />
                            View map
                        </Button>
                        <Button as="a" href="https://github.com/JFL110/jamesleach.dev-backend-monorepo/tree/main/location" target="_blank">
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