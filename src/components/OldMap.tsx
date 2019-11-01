import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import { Location } from 'diver-models'
import { mapStyle } from '../mapStyle'

type Props = {
    spots: Location[]
    onSpotClick: (spot: Location) => void
}

const OldMap = withScriptjs(withGoogleMap((props: Props) => {
    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 55, lng: 12 }}
            options={{
                styles: mapStyle,
                disableDefaultUI: true
            }}
            defaultOptions={{
                disableDefaultUI: true
            }}
        >   
            {props.spots.map(spot =>
                <Marker key={spot.id} position={{ lat: spot.coordinate.latitude, lng: spot.coordinate.longitude }} onClick={() => props.onSpotClick(spot)}  />  
            )}
        </GoogleMap>
    )
}))

export default OldMap



