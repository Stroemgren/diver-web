import React from 'react'
import { Typography, Button } from '@material-ui/core'
import Popup from './Popup'
import { Center } from 'diver-models'

type Props = {
    lat: number
    lng: number
    center: Center
    onViewClick: () => void
}

const CenterPopup = (props: Props) => {
    const { lat, lng, center, onViewClick } = props

    return (
        <Popup lat={lat} lng={lng}>
            <Typography variant="h6" gutterBottom style={{fontSize: '1rem', marginTop: '-8px'}}>{center.name}</Typography>
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

export default CenterPopup
