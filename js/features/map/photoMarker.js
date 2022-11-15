
import React from 'react'
import { Marker } from 'react-leaflet';
import * as L from 'leaflet'

const photosZIndexStart = 500;
const photoIcon = L.icon({
    iconUrl: '/static/camera-icon.png',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
});

export const PhotoMarker = ({ photo, onClick, isMiniMap }) => <Marker
cl
    key={photo.url}
    position={[photo.latitude, photo.longitude]}
    icon={photoIcon}
    zIndexOffset={photosZIndexStart + photo.index}
    onClick={isMiniMap ? undefined : () => onClick(photo)}
    interactive={!isMiniMap}
/>