import React from 'react'
import { makeStyles, Typography, Button } from '@material-ui/core'
import Popup from './Popup'
import { Location } from 'diver-models'

type Props = {
    lat: number
    lng: number
    location: Location
    onViewClick: () => void
}

const SpotPopup = (props: Props) => {
    const classes = useStyles(props)
    const { lat, lng, location, onViewClick } = props

    return (
        <Popup lat={lat} lng={lng}>
            <Typography variant="h6" style={{fontSize: '1rem'}}>{location.name}</Typography>
            <Button 
                variant="contained" 
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

const useStyles = makeStyles({
    container: {
        backgroundColor: '#fff'
    }
})
