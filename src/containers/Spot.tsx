import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { fetchLocations } from '../store/spots/thunks'
import { push } from 'connected-react-router'
import * as SpotComp from '../components/Spot'
import { selectedSpot, allLocations } from '../store/spots/selectors'
import { Location } from 'diver-models'
import GoogleMap from '../components/Map/GoogleMap'
import Marker from '../components/Map/Marker'
import { getCenter, getZoom } from '../store/map/selectors'
import { setCenter, setZoom } from '../store/map/actions'
import Layout from '../components/Layout'
import { allCenters } from '../store/center/selectors'
import { fetchCenters } from '../store/center/thunks'
import { makeStyles, Paper } from '@material-ui/core'
import MaxWidth from '../components/Layout/MaxWidth'
import HeaderSection from '../components/Spot/HeaderSection'
import BackdropLayout from '../components/Layout/BackdropLayout'

const mapHeight = 250

const Spot = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const locations = useSelector(allLocations, shallowEqual)
    const centers = useSelector(allCenters, shallowEqual)
    const selectedLocation = useSelector(selectedSpot, shallowEqual)
    const mapCenter = useSelector(getCenter, shallowEqual)
    const mapZoom = useSelector(getZoom, shallowEqual)
    const [ showSticky, setShowSticky ] = useState(false)

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
        dispatch(push(`/dive-spot/${location.id}`))
        dispatch(setCenter(location.coordinate))
        dispatch(setZoom(10))
    }

    return (
        <Layout>
            <Paper style={{position: 'absolute', top: 0, left: 0, right: 0, zIndex: 100, display: showSticky ? 'block' : 'none', borderRadius: '0', padding: '0 32px'}}>
                <MaxWidth>
                    <HeaderSection
                        onBackClick={() => dispatch(push('/map'))}
                        title={selectedLocation ? selectedLocation.name : ''}
                        place={selectedLocation ? selectedLocation.country.name : ''}
                    />
                </MaxWidth>
            </Paper>
            <BackdropLayout
                onBackdropHidden={() => setShowSticky(true)}
                onBackdropVisible={() => setShowSticky(false)}
                backdropHeight={mapHeight}
                backdrop={
                    <div className={classes.mapFix}>
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
                        </GoogleMap>
                    </div>
                }
            >
                <MaxWidth>
                    {selectedLocation &&
                        <>
                            <HeaderSection 
                                onBackClick={() => dispatch(push('/map'))}
                                title={selectedLocation.name}
                                place={selectedLocation ? selectedLocation.country.name : ''}
                            />
                            <SpotComp.default
                                location={selectedLocation}
                                nearBySpots={locations}
                                nearByCenters={centers}
                            />
                        </>
                    }
                </MaxWidth>
            </BackdropLayout>
        </Layout>
    )
}

export default Spot

const useStyles = makeStyles({
    mapFix: {
        height: `${mapHeight + 50}px`,
        marginTop: '-25px'
    }
})
