import React, { ReactNode } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { Location, Coordinate } from 'diver-models'
import { mapStyle } from '../mapStyle'

type Props = {
    children: ReactNode
    center: Coordinate
}

const InternalMap = withScriptjs(withGoogleMap((props: Props) => {
    const { children, center } = props

    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: center.latitude, lng: center.longitude }}
            options={{
                styles: mapStyle,
                disableDefaultUI: true
            }}
            defaultOptions={{
                disableDefaultUI: true
            }}
        >   
            {children}
        </GoogleMap>
    )
}))

export default InternalMap
