import React, { useEffect, useState } from 'react'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { fetchLocations } from '../store/spots/thunks'
import { push } from 'connected-react-router'
import { selectedSpot, allLocations } from '../store/spots/selectors'
import { Location, Center } from 'diver-models'
import GoogleMap from '../components/Map/GoogleMap'
import Marker from '../components/Map/Marker'
import { getCenter, getZoom } from '../store/map/selectors'
import { setCenter, setZoom } from '../store/map/actions'
import Layout from '../components/Layout'
import { allCenters } from '../store/center/selectors'
import { fetchCenters } from '../store/center/thunks'
import { makeStyles } from '@material-ui/core'
import SpotPopup from '../components/Map/SpotPopup'
import CenterPopup from '../components/Map/CenterPopup'

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
    const [ activeLocation, setActiveLocation ] = useState(null as Location | Center | null)

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
        dispatch(setCenter(location.coordinate))
        dispatch(setZoom(10))
        setActiveLocation(location)
    }

    const handleCenterClick = (center: Center) => {
        dispatch(setCenter(center.coordinate))
        dispatch(setZoom(10))
        setActiveLocation(center)
    }

    return (
        <Layout>
            <GoogleMap
                center={mapCenter}
                zoom={mapZoom}
            >
                {locations.map(l => (
                    <Marker 
                        active={selectedLocation !== null && l.id === selectedLocation.id} 
                        key={l.id} 
                        lat={l.coordinate.latitude} 
                        lng={l.coordinate.longitude} 
                        onClick={() => handleSpotClick(l)} 
                    />
                ))}
                {centers.map(c => (
                    <Marker
                        active={selectedLocation !== null && c.id === selectedLocation.id} 
                        key={c.id} 
                        lat={c.coordinate.latitude} 
                        lng={c.coordinate.longitude}
                        onClick={() => handleCenterClick(c)}  
                        color="secondary" 
                    />
                ))}
                {activeLocation && isSpot(activeLocation) &&
                    <SpotPopup 
                        location={activeLocation} 
                        lat={activeLocation.coordinate.latitude} 
                        lng={activeLocation.coordinate.longitude}
                        onViewClick={() => dispatch(push(`/dive-spot/${activeLocation.id}`))}
                    />
                }
                {activeLocation && isCenter(activeLocation) &&
                    <CenterPopup 
                        center={activeLocation} 
                        lat={activeLocation.coordinate.latitude} 
                        lng={activeLocation.coordinate.longitude}
                        onViewClick={() => dispatch(push(`/center/${activeLocation.id}`))}
                    />
                }
            </GoogleMap>
        </Layout>
    )
}

export default Map

const isSpot = (t: any): t is Location => (t as Location).id.substr(0, 2) === 'lo'
const isCenter = (t: any): t is Center => (t as Center).id.substr(0, 2) === 'ce'

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
