import React, { ReactNode } from 'react'
import { Coordinate } from 'diver-models'
import GoogleMapReact from 'google-map-react'
import { mapStyle } from '../../mapStyle'

const defaultProps = {
    zoom: 8,
    disableInteraction: false
}

type Props = {
    center: Coordinate
    children: ReactNode
} & Partial<typeof defaultProps>

const GoogleMap = (props: Props) => {
    const { center, children, zoom, disableInteraction } = { ...defaultProps, ...props }

    let options: { [key: string]: any } = {
        styles: mapStyle,
        disableDefaultUI: true
    }

    if (disableInteraction) {
        options = { ...options, zoomControl: false, gestureHandling: 'none' }
    }

    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCbiVq77U94A6g0sEK59tcKlKj_1NFMZkE' }}
            center={{lat: center.latitude, lng: center.longitude}}
            defaultZoom={6}
            zoom={zoom}
            options={options}
        >
            {children}
        </GoogleMapReact>
    )
}

export default GoogleMap
