import React from 'react'
import Header from '../Typography/Header'
import Place from '../Typography/Place'
import BackIcon from '@material-ui/icons/ArrowBackIos'

type Props = {
    title: string
    place: string
    onBackClick: () => void
}

const HeaderSection = (props: Props) => {
    const { title, place, onBackClick } = props

    return (
        <div style={{padding: '24px 0', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <BackIcon onClick={onBackClick} style={{marginRight: '8px', cursor: 'pointer'}} />
            <div>
                <Header>{title}</Header>
                <Place>{place}</Place>
            </div>
        </div>
    )
}

export default HeaderSection
