import React, { useEffect, useState } from 'react'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import Drawer from '../components/Drawer'
import { fetchLocations } from '../store/spots/thunks'
import { push } from 'connected-react-router'
import * as SpotComp from '../components/Spot'
import { selectedSpot, allLocations } from '../store/spots/selectors'
import { Location } from 'diver-models'
import GoogleMap from '../components/Map/GoogleMap'
import Marker from '../components/Map/Marker'
import { getCenter } from '../store/map/selectors'
import { setCenter } from '../store/map/actions'
import Layout from '../components/Layout'
import { allCenters } from '../store/center/selectors'
import { fetchCenters } from '../store/center/thunks'

const OldSpot = () => {
    const dispatch = useDispatch()
    const locations = useSelector(allLocations, shallowEqual)
    const centers = useSelector(allCenters, shallowEqual)
    const selectedLocation = useSelector(selectedSpot, shallowEqual)
    const mapCenter = useSelector(getCenter, shallowEqual)
    const [ activeLocation, setActiveLocation ] = useState(null as Location | null)

    useEffect(() => {
        dispatch(fetchLocations())
        dispatch(fetchCenters())
    }, [dispatch])

    const handleSpotClick = (location: Location) => {
        dispatch(push(`/dive-spot/${location.id}`))
        dispatch(setCenter(location.coordinate))
        setActiveLocation(location)
    }

    return (
        <Layout>
            <Drawer isOpen={selectedLocation !== null} onClose={() => dispatch(push('/'))} >
                {selectedLocation &&
                    <SpotComp.default location={selectedLocation}></SpotComp.default>
                }
            </Drawer>
            <div style={{flexGrow: 1, height: '100%'}}>
                <GoogleMap 
                    center={mapCenter}
                >
                    {locations.map(l => (
                        <Marker active={activeLocation !== null && l.id === activeLocation.id} key={l.id} lat={l.coordinate.latitude} lng={l.coordinate.longitude} onClick={() => handleSpotClick(l)} />
                    ))}
                    {centers.map(c => (
                        <Marker key={c.id} lat={c.coordinate.latitude} lng={c.coordinate.longitude} color="secondary" />
                    ))}
                </GoogleMap>
            </div>
        </Layout>
    )
}

export default OldSpot
