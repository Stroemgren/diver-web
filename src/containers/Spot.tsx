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
import { makeStyles, Button, Paper } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import debounce from 'lodash/debounce'
import Header from '../components/Typography/Header'
import Place from '../components/Typography/Place'
import MaxWidth from '../components/Layout/MaxWidth'
import HeaderSection from '../components/Spot/HeaderSection'

const Spot = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const locations = useSelector(allLocations, shallowEqual)
    const centers = useSelector(allCenters, shallowEqual)
    const selectedLocation = useSelector(selectedSpot, shallowEqual)
    const mapCenter = useSelector(getCenter, shallowEqual)
    const mapZoom = useSelector(getZoom, shallowEqual)
    const scrollEl = useRef(null as any)
    const scrollingEl = useRef(null as any)
    const [ showSticky, setShowSticky ] = useState(false)

    useEffect(
        () => {
            const handleScroll = () => {
                const position = scrollingEl.current.getBoundingClientRect()
                setShowSticky(position.top < 1)
            }
            scrollEl.current.addEventListener("scroll", debounce(handleScroll))
            return () => scrollEl.current.removeEventListener("scroll", debounce(handleScroll))
        },
        [debounce] 
      );

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
            <div className={classes.container}>
                <Paper style={{position: 'absolute', top: 0, left: 0, right: 0, zIndex: 100, display: showSticky ? 'block' : 'none', borderRadius: '0', padding: '0 32px'}}>
                    <MaxWidth>
                        <HeaderSection
                            title={selectedLocation ? selectedLocation.name : ''}
                            place={selectedLocation ? selectedLocation.country.name : ''}
                        />
                    </MaxWidth>
                </Paper>
                <div className={classes.backdrop}>
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
                </div>
                <div className={classes.contentContainer} ref={scrollEl}>               
                    <div className={classes.content} ref={scrollingEl}>
                        <MaxWidth>
                            {selectedLocation &&
                                <SpotComp.default
                                    location={selectedLocation}
                                />
                            }
                        </MaxWidth>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Spot

const mapHeight = 250

const useStyles = makeStyles({
    container: {
        position: 'relative',
        height: '100%',
        maxHeight: '100%',
        width: '100%',
    },
    backdrop: {
        width: '100%',
        height: `${mapHeight}px`,
        top: 0,
        overflow: 'hidden'
    },
    mapFix: {
        height: `${mapHeight + 50}px`,
        marginTop: '-25px'
    },
    contentContainer: {
        position: 'absolute',
        height: '100%',
        maxHeight: '100%',
        width: '100%',
        zIndex: 75,
        overflowY: 'scroll',
        top: 0,
    },
    content: {
        backgroundColor: '#fff',
        width: '100%',
        marginTop: `${mapHeight}px`,
        padding: '0 32px 24px 32px'
    }
})
