/*global L*/

import React from 'react'
import { connect } from 'react-redux'
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Control from 'react-leaflet-control';
import mapSlice, { pointToCentre } from './mapSlice'

const SimpleMap = ({
    isMiniMap = false,
    centre,
    points,
    viewportObject,
    currentLightBoxImageIndex,
    setCurrentLightBoxImageIndex,
    setNewCentre,
    lastNonNullLightBoxImageIndex }) => {
    // Markers
    const redDotIcon = L.divIcon({ className: 'red-dot-marker' });
    const blueDotIcon = L.divIcon({ className: 'blue-dot-marker' });
    const photoIcon = L.icon({
        iconUrl: '/static/camera-icon.png',
        iconSize: [40, 40],
        iconAnchor: [20, 20],
    });

    const onCentreToMostRecentLocation = () => {
        const _mostRecentPoint = points.find(p => p.isMostRecent);
        if (_mostRecentPoint != null) {
            setNewCentre(pointToCentre(_mostRecentPoint));
        }
    };

    // Photos

    const photoUrls = points.filter(p => p.isPhoto).map(p => ({ src: p.url }));
    const onModalClose = () => { setCurrentLightBoxImageIndex(null); };

    const setCentreToPhotoId = i => {
        setCurrentLightBoxImageIndex(i);
        const _imagePoint = points.find(p => p.isPhoto && p.photoPointId == i);
        if (_imagePoint != null) {
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
            const sortedPhotos = points.filter(p => p.isPhoto && p.time != null).sort((a, b) => b.time - a.time);
            if (sortedPhotos.length > 0) {
                setCurrentLightBoxImageIndex(sortedPhotos[0].photoPointId);
                setNewCentre(pointToCentre(sortedPhotos[0]));
            }
        } else {
            setCentreToPhotoId(lastNonNullLightBoxImageIndex);
        }
    };

    //

    const defaultZoom = isMiniMap ? 8 : 10;

    return (
        <React.Fragment>
            {(!isMiniMap && photoUrls.length > 0 && currentLightBoxImageIndex != null) && <ModalGateway>
                <Modal
                    onClose={onModalClose}
                    styles={{
                        blanket: base => ({
                            ...base,
                            backgroundColor: 'rgba(0,0,0,0.4)',
                        }),
                    }}>
                    <Carousel
                        views={photoUrls}
                        currentIndex={currentLightBoxImageIndex}
                        trackProps={{
                            onViewChange: setCentreToPhotoId
                        }}
                    />
                </Modal>
            </ModalGateway>}
            <LeafletMap
                center={[centre.lat, centre.lng]}
                {...(viewportObject.isInitial ? { zoom: defaultZoom } : {})}
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
                        && <a className="leaflet-control-zoom-in zoom-circle" href="#" onClick={onCentreToMostRecentLocation} title="Centre to most recent location"></a>}
                </Control>
                {!isMiniMap && <Control position="topleft" className="leaflet-control-zoom leaflet-bar" >
                    <a className="leaflet-control-zoom-in" href="#" onClick={onClickOpenPhotosControl} title="Open photos">
                        <img src="/static/camera-icon.png" style={{ width: "100%" }} /></a>
                </Control>}
                <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
                {
                    points
                        .filter(p => !isMiniMap || !p.isPhoto)
                        .map(p => <Marker
                            key={p.id}
                            position={[p.lat, p.long]}
                            icon={p.isPhoto ? photoIcon : (p.isMostRecent ? redDotIcon : blueDotIcon)}
                            {...(p.isMostRecent ? { zIndexOffset: 1000 } : (p.isPhoto ? { zIndexOffset: 300 + p.photoPointId } : {}))}
                            {...(p.isPhoto ? { onClick: () => onClickPhotoMarker(p) } : {})}
                        />)
                }
            </LeafletMap>
        </React.Fragment>
    );
}

export default connect(// State -> Props (it gets all the slice state)
    state => ({
        points: state[mapSlice.name].points,
        centre: state[mapSlice.name].centre,
        viewportObject: state[mapSlice.name].viewportObject,
        currentLightBoxImageIndex: state[mapSlice.name].currentLightBoxImageIndex,
        lastNonNullLightBoxImageIndex: state[mapSlice.name].lastNonNullLightBoxImageIndex
    }),
    // Dispatch -> Props
    {
        setNewCentre: mapSlice.actions.setNewCentre,
        setCurrentLightBoxImageIndex: mapSlice.actions.setCurrentLightBoxImageIndex
    })(SimpleMap)
