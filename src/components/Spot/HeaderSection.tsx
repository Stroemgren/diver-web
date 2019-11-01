import React from 'react'
import Header from '../Typography/Header'
import Place from '../Typography/Place'

type Props = {
    title: string
    place: string
}

const HeaderSection = (props: Props) => {
    const { title, place } = props

    return (
        <div style={{padding: '16px 0'}}>
            <Header>{title}</Header>
            <Place>{place}</Place>
        </div>
    )
}

export default HeaderSection
