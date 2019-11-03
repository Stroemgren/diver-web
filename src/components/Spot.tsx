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
import { Location, Center } from 'diver-models'
import SpotCard from './SpotCard'
import CenterCard from './CenterCard'
import { Grid } from '@material-ui/core'
import HeaderSection from './Spot/HeaderSection'
import Section from './Section'
import HorizontalSlider from './HorizontalSlider'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'

type Props = {
    location: Location
    nearBySpots: Location[]
    nearByCenters: Center[]
}

const Spot = (props: Props) => {
    const { location, nearBySpots, nearByCenters } = props
    const dispatch = useDispatch()
    
    return (
        <div>
            <Section>
                <Subtitle paragraph>About this spot</Subtitle>
                <Attributes location={location} />
                <Description>{ props.location.description }</Description>
            </Section>

            <Section>
                <Subtitle paragraph>Weather forecast</Subtitle>
                <Weather coordinate={props.location.coordinate} />
            </Section>

            <Section>
                <Subtitle paragraph>Photos</Subtitle>
                <Photos images={[image1, image2, image3, image4, image5]} />
            </Section>

            <Section>
                <Subtitle paragraph>Other locations nearby</Subtitle>
                <HorizontalSlider>
                    {nearBySpots.map(s =>
                        <SpotCard onClick={(spot) => dispatch(push(`/dive-spot/${spot.id}`))} key={s.id} spot={s} />
                    )}
                </HorizontalSlider>
            </Section>

            <Section>
                <Subtitle paragraph>Nearby centers</Subtitle>
                <HorizontalSlider>
                    {nearByCenters.map(c =>
                        <CenterCard onClick={(center) => dispatch(push(`/center/${center.id}`))} key={c.id} center={c} />
                    )}
                </HorizontalSlider>
            </Section>
        </div>
    )
}

export default Spot