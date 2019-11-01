import React, { useEffect, useState } from 'react'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { fetchLocations } from '../store/spots/thunks'
import { push } from 'connected-react-router'
import { selectedSpot, allLocations } from '../store/spots/selectors'
import { Location } from 'diver-models'
import GoogleMap from '../components/Map/GoogleMap'
import Marker from '../components/Map/Marker'
import { getCenter, getZoom } from '../store/map/selectors'
import { setCenter, setZoom } from '../store/map/actions'
import Layout from '../components/Layout'
import { allCenters } from '../store/center/selectors'
import { fetchCenters } from '../store/center/thunks'
import { makeStyles } from '@material-ui/core'
import SpotPopup from '../components/Map/SpotPopup'

type Props = {

}

const Map = (props: Props) => {
    const classes = useStyles(props)
    const dispatch = useDispatch()
    const locations = useSelector(allLocations, shallowEqual)
    const centers = useSelector(allCenters, shallowEqual)
    const selectedLocation = useSelector(selectedSpot, shallowEqual)
    const mapCenter = useSelector(getCenter, shallowEqual)
    const mapZoom = useSelector(getZoom, shallowEqual)
    const [ activeLocation, setActiveLocation ] = useState(null as Location | null)

    useEffect(() => {
        dispatch(fetchLocations())
        dispatch(fetchCenters())
    }, [dispatch])

    useEffect(() => {
        if (selectedLocation) {
            dispatch(setCenter(selectedLocation.coordinate))
            dispatch(setZoom(10))
        }
    }, [selectedLocation, dispatch])

    const handleSpotClick = (location: Location) => {
        // dispatch(push(`/dive-spot/${location.id}`))
        dispatch(setCenter(location.coordinate))
        dispatch(setZoom(10))
        setActiveLocation(location)
    }

    return (
        <Layout>
            <GoogleMap
                center={mapCenter}
                zoom={mapZoom}
            >
                {locations.map(l => (
                    <Marker active={selectedLocation !== null && l.id === selectedLocation.id} key={l.id} lat={l.coordinate.latitude} lng={l.coordinate.longitude} onClick={() => handleSpotClick(l)} />
                ))}
                {centers.map(c => (
                    <Marker key={c.id} lat={c.coordinate.latitude} lng={c.coordinate.longitude} color="secondary" />
                ))}
                {activeLocation &&
                    <SpotPopup 
                        location={activeLocation} 
                        lat={activeLocation.coordinate.latitude} 
                        lng={activeLocation.coordinate.longitude}
                        onViewClick={() => dispatch(push(`/dive-spot/${activeLocation.id}`))}
                    />
                }
            </GoogleMap>
        </Layout>
    )
}

export default Map

const mapHeight = '325px'

const useStyles = makeStyles({
    container: {
        position: 'relative',
        height: '100%',
        maxHeight: '100%',
        width: '100%',
    },
    backdrop: {
        width: '100%',
        height: mapHeight,
        top: 0,
        overflow: 'hidden'
    },
    mapFix: {
        height: '375px',
        marginTop: '-25px'
    },
    contentContainer: {
        position: 'absolute',
        height: '100%',
        maxHeight: '100%',
        width: '100%',
        zIndex: 75,
        overflowY: 'scroll',
        top: 0
    },
    content: {
        backgroundColor: '#fff',
        width: '100%',
        marginTop: mapHeight,
    }
})
