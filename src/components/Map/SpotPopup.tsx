import React from 'react'
import { Typography, Button } from '@material-ui/core'
import Popup from './Popup'
import { Location } from 'diver-models'

type Props = {
    lat: number
    lng: number
    location: Location
    onViewClick: () => void
}

const SpotPopup = (props: Props) => {
    const { lat, lng, location, onViewClick } = props

    return (
        <Popup lat={lat} lng={lng}>
            <Typography variant="overline" style={{ fontSize: '0.65rem' }}>{location.locationType} dive</Typography>
            <Typography variant="h6" gutterBottom style={{fontSize: '1rem', marginTop: '-8px'}}>{location.name}</Typography>
            <Button 
                size="small" 
                color="primary"
                onClick={onViewClick}
            >
                View
            </Button>
        </Popup>
    )
}

export default SpotPopup
