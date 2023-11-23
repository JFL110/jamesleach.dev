import React from 'react'
import * as L from 'leaflet'
import { Rectangle } from 'react-leaflet';

const squareToMarker = (latitudeIncrement, longitudeIncrement, square) => {
    const gridWidth = 360 / longitudeIncrement
    const x = square % gridWidth
    const y = Math.floor(square / gridWidth)
    const latitude = y * latitudeIncrement - 85
    const longitude = x * longitudeIncrement - 180

    const bounds = L.latLngBounds(L.latLng(latitude, longitude), L.latLng(latitude + latitudeIncrement, longitude + longitudeIncrement))
    return <Rectangle
        fillOpacity={0.6}
        weight={2}
        key={square}
        bounds={bounds}
        color="#FF0000"
        interactive={false}
    />
}

export const MapSquaresLayer = ({ squareCollection }) => (
    <>
        {
            squareCollection
                .flatMap(s => s.squares
                    .map(square => squareToMarker(s.latitudeIncrement, s.longitudeIncrement, square)))
        }
    </>
);