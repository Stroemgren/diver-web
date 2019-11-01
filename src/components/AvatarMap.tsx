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
            <div style={{ width: '120px', height: '120px', marginTop: '-20px', marginLeft: '-20px' }}> 
                <GoogleMap
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
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        overflow: 'hidden'
    }
})
