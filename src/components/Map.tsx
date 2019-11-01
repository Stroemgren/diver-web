import React, { ReactNode } from 'react'
import InternalMap from './InternalMap'
import { Coordinate } from 'diver-models'

type Props = {
    children: ReactNode
    center: Coordinate
}

const Map = (props: Props) => {
    const { children, center } = props

    return (
        <InternalMap
            center={center}
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCbiVq77U94A6g0sEK59tcKlKj_1NFMZkE&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%`, width: '100%' }} />}
            containerElement={<div style={{ height: `100%`, width: '100%' }} />}
            mapElement={<div style={{ height: `100%`, width: '100%' }} />}
        >
            {children}
        </InternalMap>
    )
}

export default Map
