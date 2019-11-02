import React, { useState } from 'react'
import Layout from '../components/Layout'
import BackdropLayout from '../components/Layout/BackdropLayout'
import GoogleMap from '../components/Map/GoogleMap'
import { useSelector, shallowEqual } from 'react-redux'
import { allLocations } from '../store/spots/selectors'
import { allCenters, selectedCenter } from '../store/center/selectors'
import { getCenter, getZoom } from '../store/map/selectors'
import { makeStyles } from '@material-ui/styles'
import Marker from '../components/Map/Marker'
import { threadId } from 'worker_threads'
import HeaderSection from '../components/Spot/HeaderSection'
import MaxWidth from '../components/Layout/MaxWidth'
import { Typography } from '@material-ui/core'
import Subtitle from '../components/Typography/Subtitle'
import Section from '../components/Section'
import Body from '../components/Typography/Body'

const mapHeight = 250

const Center = () => {
    const classes = useStyles()
    const [ showSticky, setShowSticky ] = useState(false)
    const thisCenter = useSelector(selectedCenter, shallowEqual)
    const locations = useSelector(allLocations, shallowEqual)
    const centers = useSelector(allCenters, shallowEqual)
    const mapCenter = useSelector(getCenter, shallowEqual)
    const mapZoom = useSelector(getZoom, shallowEqual)
    console.log(thisCenter)

    return (
        <Layout>
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
                                <Marker key={l.id} lat={l.coordinate.latitude} lng={l.coordinate.longitude} />
                            ))}
                            {centers.map(c => (
                                <Marker active={thisCenter !== null && c.id === thisCenter.id} key={c.id} lat={c.coordinate.latitude} lng={c.coordinate.longitude} color="secondary" />
                            ))}
                        </GoogleMap>
                    </div>
                }
            >
                {thisCenter !== null &&
                    <MaxWidth>
                        <div style={{ marginBottom: '24px' }}>
                            <HeaderSection 
                                title={thisCenter.name}
                                place={thisCenter.address.country.name}
                            />
                        </div>
                        <Section>
                            <Subtitle paragraph>Address</Subtitle>
                            <Body>{thisCenter.address.address1}</Body>
                            <Body>{thisCenter.address.zipcode}, {thisCenter.address.city.name}</Body>
                            <Body>{thisCenter.address.country.name}</Body>
                        </Section>
                    </MaxWidth>
                }
            </BackdropLayout>
        </Layout>
    )
}

export default Center

const useStyles = makeStyles({
    mapFix: {
        height: `${mapHeight + 50}px`,
        marginTop: '-25px'
    }
})
