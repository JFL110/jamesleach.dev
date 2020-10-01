/*global L*/

import React, { useEffect } from 'react'
import { connectWithSlice, connectToOpState } from 'repileux'
import { Map as LeafletMap, TileLayer, Marker, CircleMarker } from 'react-leaflet';
import Control from 'react-leaflet-control';
import mapSlice, { pointToCentre } from './mapSlice'
import mapPointsState from './mapPointsState'
import { Modal } from 'react-bootstrap';
import AwesomeSlider from 'react-awesome-slider';
import useEventListener from '@use-it/event-listener';

import 'react-awesome-slider/src/core/styles.scss';
import './leaflet.css'
import './map.scss'

const SimpleMap = ({
    isMiniMap = false,
    centre,
    points,
    viewportObject,
    currentLightBoxImageIndex,
    setCurrentLightBoxImageIndex,
    setNewCentre,
    lastNonNullLightBoxImageIndex }) => {

    const onCentreToMostRecentLocation = _points => {
        const _mostRecentPoint = _points?.find(p => p.isMostRecent);
        if (_mostRecentPoint) {
            setNewCentre(pointToCentre(_mostRecentPoint));
        }
    };

    useEffect(() => {
        mapPointsState.calculateIfNeeded().then(_points => {
            onCentreToMostRecentLocation(_points)
        });
    }, []);

    // Markers
    const photoIcon = L.icon({
        iconUrl: '/static/camera-icon.png',
        iconSize: [40, 40],
        iconAnchor: [20, 20],
    });

    // Photos

    const photoUrls = points.value?.filter(p => p.isPhoto).map(p => ({ src: p.url })) ?? [];
    const onModalClose = () => {
        setCurrentLightBoxImageIndex(null);
    };

    const setCentreToPhotoId = i => {
        setCurrentLightBoxImageIndex(i);
        const _imagePoint = points.value?.find(p => p.isPhoto && p.photoPointId == i);
        if (_imagePoint) {
            setNewCentre(pointToCentre(_imagePoint));
        }
    };

    const onClickPhotoMarker = (point) => {
        setCurrentLightBoxImageIndex(point.photoPointId);
        setNewCentre(pointToCentre(point));
    }

    const onClickOpenPhotosControl = () => {
        if (lastNonNullLightBoxImageIndex == null) {
            // Goto most recent
            const sortedPhotos = points.value?.filter(p => p.isPhoto && p.time != null).sort((a, b) => b.time - a.time) ?? [];
            if (sortedPhotos.length > 0) {
                setCurrentLightBoxImageIndex(sortedPhotos[0].photoPointId);
                setNewCentre(pointToCentre(sortedPhotos[0]));
            }
        } else {
            setCentreToPhotoId(lastNonNullLightBoxImageIndex);
        }
    };


    // Key presses
    useEventListener('keydown', ({ keyCode }) => {
        // Only if lightbox shown
        if (currentLightBoxImageIndex == null) {
            return;
        }
        if (keyCode == 39 && 
            points.value?.some(p => p.isPhoto && p.time != null && p.photoPointId == currentLightBoxImageIndex + 1)){
            // Right
            setCurrentLightBoxImageIndex(currentLightBoxImageIndex + 1);
        } else if (keyCode == 37 && currentLightBoxImageIndex > 0) {
            // Left
            setCurrentLightBoxImageIndex(currentLightBoxImageIndex - 1);
        }
    });

    //

    const defaultZoom = isMiniMap ? 8 : 10;

    return (
        <React.Fragment>

            {(!isMiniMap && photoUrls.length > 0) &&
                <Modal
                    show={currentLightBoxImageIndex != null}
                    onHide={onModalClose}
                    keyboard={false}
                    dialogClassName='modal-content-only'
                    centered
                >
                    <AwesomeSlider
                        bullets={false}
                        selected={currentLightBoxImageIndex}
                    >
                        {photoUrls.map((e, i) => <div key={i} data-src={e.src} />)}
                    </AwesomeSlider>
                </Modal>}

            <LeafletMap
                preferCanvas={true}
                center={[centre.lat, centre.lng]}
                zoom={defaultZoom}
                minZoom={2}
                maxZoom={14}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
                viewport={viewportObject}
                className={isMiniMap ? "mini-map" : "maxi-map"}
            >

                <Control position="topleft" className="leaflet-control-zoom leaflet-bar" >
                    {!isMiniMap
                        && <a className="leaflet-control-zoom-in zoom-circle"
                            href="#"
                            onClick={() => onCentreToMostRecentLocation(points.value)}
                            title="Centre to most recent location"></a>}
                </Control>
                {!isMiniMap && <Control position="topleft" className="leaflet-control-zoom leaflet-bar" >
                    <a className="leaflet-control-zoom-in" href="#" onClick={onClickOpenPhotosControl} title="Open photos">
                        <img src="/static/camera-icon.png" style={{ width: "100%" }} /></a>
                </Control>}
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                {
                    points
                        .value
                        ?.filter(p => !isMiniMap || !p.isPhoto)
                        .map(p => p.isPhoto ? <Marker
                            key={p.id}
                            position={[p.lat, p.long]}
                            icon={photoIcon}
                            {...(p.isMostRecent ? { zIndexOffset: 1000 } : (p.isPhoto ? { zIndexOffset: 300 + p.photoPointId } : {}))}
                            {...(p.isPhoto ? { onClick: () => onClickPhotoMarker(p) } : {})}
                        /> :
                            <CircleMarker
                                key={p.id}
                                center={[p.lat, p.long]}
                                radius={7}
                            />)
                }
            </LeafletMap>
        </React.Fragment >
    );
}

export default connectToOpState(mapPointsState,
    connectWithSlice(mapSlice, SimpleMap))