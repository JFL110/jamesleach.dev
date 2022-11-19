import React, { useEffect } from 'react'
import { connectWithSlice, connectToOpState } from 'repileux'
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import mapSlice from './mapSlice'
import mapPointsState from './mapPointsState'
import Control from 'react-leaflet-control';
import { MapSquaresLayer } from './mapSquaresLayer';

import './leaflet.css'
import './map.scss'
import { PhotoMarker } from './photoMarker';
import PhotoLightbox from './photoLightbox.js';
import MapBottomBar from './mapBottomBar';


const SimpleMap = ({
    isMiniMap = false,
    points,
    centre,
    viewportObject,
    currentLightBoxPhoto,
    setCurrentLightBoxPhoto,
    setNewCentre,
    lastNonNullLightBoxPhoto }) => {

    useEffect(() => {
        mapPointsState.calculate()
    }, [])

    const defaultZoom = isMiniMap ? 7 : 8;

    const onClickPhotoMarker = (photo) => {
        setCurrentLightBoxPhoto(photo);
        setNewCentre(photo);
    }

    const orderedPhotos = points.value?.photos
        ?.filter(p => p.time != null)
        .sort((a, b) => b.time - a.time)
        .map((photo, i) => ({ ...photo, index: i })) ?? []

    const onClickOpenPhotosControl = () => {
        const photo = lastNonNullLightBoxPhoto || orderedPhotos.length > 0 && orderedPhotos[0]
        if (photo) {
            setCurrentLightBoxPhoto(photo)
            setNewCentre(photo);
        }
    };

    return <>
        <PhotoLightbox
            currentLightBoxPhoto={currentLightBoxPhoto}
            setCurrentLightBoxPhoto={setCurrentLightBoxPhoto}
            orderedPhotos={orderedPhotos}
            onChange={onClickPhotoMarker}
        />
        <LeafletMap
            preferCanvas={true}
            center={[centre.latitude, centre.longitude]}
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
            {!isMiniMap &&
                <Control position="topleft" className="leaflet-control-zoom leaflet-bar" >
                    <a className="leaflet-control-zoom-in" href="#" onClick={onClickOpenPhotosControl} title="Open photos">
                        <img src="/static/camera-icon.png" style={{ width: "100%" }} /></a>
                </Control>
            }
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            {
                orderedPhotos.map(photo =>
                    <PhotoMarker
                        photo={photo}
                        isMiniMap={isMiniMap}
                        onClick={onClickPhotoMarker}
                        key={photo.index}
                    />)
            }
            {
                points.value?.squareCollection && <MapSquaresLayer squareCollection={points.value.squareCollection} />
            }
        </LeafletMap >
        {!isMiniMap && <MapBottomBar />}
    </>
}

export default connectToOpState(mapPointsState, connectWithSlice(mapSlice, SimpleMap))