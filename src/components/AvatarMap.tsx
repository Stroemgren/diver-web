import React from 'react'
import { Coordinate } from 'diver-models'
import Marker from './Map/Marker'
import { makeStyles } from '@material-ui/core'
import GoogleMap from './Map/GoogleMap'

type Props = {
    coordinate: Coordinate
}

const AvatarMap = (props: Props) => {
    const classes = useStyles()
    const { coordinate } = props

    return (
        <div className={classes.container}>
            <div style={{ width: '190px', height: '190px', marginTop: '-20px', marginLeft: '-20px' }}> 
                <GoogleMap
                    disableInteraction
                    center={coordinate}
                >
                    <Marker lat={coordinate.latitude} lng={coordinate.longitude} />
                </GoogleMap>
            </div>
        </div>
    )
}

export default AvatarMap

const useStyles = makeStyles({
    container: {
        width: '150px',
        height: '150px',
        overflow: 'hidden'
    }
})
