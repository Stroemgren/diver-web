import React from 'react'
import Weather from './Weather'
import Subtitle from './Typography/Subtitle'
import Attributes from './Spot/Attributes'
import Description from './Spot/Description'
import Photos from './Spot/Photos'
import image1 from '../photos/image1.jpg'
import image2 from '../photos/image2.jpg'
import image3 from '../photos/image3.jpg'
import image4 from '../photos/image4.jpg'
import image5 from '../photos/image5.jpg'
import { Location } from 'diver-models'
import SpotCard from './SpotCard'
import { Grid } from '@material-ui/core'
import HeaderSection from './Spot/HeaderSection'

type Props = {
    location: Location
}

const Spot = (props: Props) => {
    const { location } = props
    const place = !location.city ? location.country.name : `${location.city.name}, ${location.country.name}`
    
    return (
        <div>
            <div style={{ marginBottom: '24px' }}>
                <HeaderSection 
                    title={location.name}
                    place={place}
                />
            </div>
            <Subtitle paragraph>About this spot</Subtitle>
            <Attributes location={location} />
            <Description>{ props.location.description }</Description>
            <Subtitle paragraph>Weather Forecast</Subtitle>
            <Weather coordinate={props.location.coordinate} />

            
            <Subtitle paragraph>Photos</Subtitle>
            <Photos images={[image1, image2, image3, image4, image5]} />
            
            <Subtitle paragraph>Nearby Locations</Subtitle>
            <SpotCard />

            <Subtitle paragraph>Nearby Centers</Subtitle>
            <SpotCard />
        </div>
    )
}

export default Spot