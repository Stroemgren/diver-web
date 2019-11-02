import React, { ReactNode } from 'react'
import Icon from '@mdi/react'
import { mdiWeatherWindy } from '@mdi/js'
import { makeStyles } from '@material-ui/core'
import { mdiWeatherSunny, mdiWeatherPartlyCloudy, mdiWeatherCloudy, mdiWeatherRainy, mdiWeatherPouring } from '@mdi/js'

type Props = {
    title: string
    wind: number
    icon: string
    minTemp: number
    maxTemp: number
}

const Segment = (props: { width: number, children: ReactNode, align: 'left' | 'center' | 'right' }) => {
    const classes = useStyles()
    const justify = { left: 'flex-start', center: 'space-around', right: 'flex-end' }[props.align]

    return (
        <div style={{ width: `${props.width}%`, justifyContent: justify }} className={classes.segment}>{props.children}</div>
    )
}

const WeatherDay = (props: Props) => {
    const classes = useStyles(props)

    return (
        <div className={classes.root}>
            <Segment width={13} align="left">
                <p className={classes.title}>{props.title}</p>
            </Segment>
            <Segment width={18} align="center">
                <Icon
                    className={classes.attributeIcon}
                    path={mdiWeatherWindy}
                    title="Wind"
                    size={0.7}
                />
                <p className={classes.attribute}>{props.wind}<span className={classes.attributePostfix}> m/s</span></p>
            </Segment>
            <Segment width={20} align="center">
                <Icon 
                    path={iconMap[props.icon].icon}
                    style={{ fill: iconMap[props.icon].color }}
                    size={1}
                />
            </Segment>
            <Segment width={9} align="left">
                <p className={classes.attribute}>{props.minTemp}°C</p>
            </Segment>
            <Segment width={31} align="center">
                <div className={classes.tempGraphContainer}>
                    <div className={classes.tempGraphBaseline} />
                    <div className={classes.tempMinLine} style={{ width: tempToWidth(props.minTemp) }} />
                    <div className={classes.tempMaxLine} style={{ width: tempToWidth(props.maxTemp) }} />
                </div>
            </Segment>
            <Segment width={9} align="right">
                <p className={classes.attribute} style={{ color: '#222' }}>{props.maxTemp}°C</p>
            </Segment>
        </div>
    )
}

export default WeatherDay

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    segment: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    title: {
        fontSize: '1rem',
        margin: 0
    },
    attributeIcon: {
        marginRight: '4px',
        fill: theme.palette.primary.main
    },
    attribute: {
        color: '#666',
        fontSize: '1rem',
        margin: '8px 0'
    },
    attributePostfix: {
        fontSize: '0.675rem',
        fontWeight: 700
    },
    tempGraphContainer: {
        position: 'relative',
        width: '100%',
        height: '15px',
        margin: '0 8px'
    },
    tempGraphBaseline: {
        position: 'absolute',
        top: '7px',
        width: '100%',
        borderBottom: '1px dashed #ccc'
    },
    tempMinLine: {
        backgroundColor: '#ccc',
        height: '5px',
        borderBottomLeftRadius: '2px',
        borderTopLeftRadius: '2px',
        position: 'absolute',
        right: '50%',
        top: '5px'
    },
    tempMaxLine: {
        backgroundColor: '#FF8C20',
        height: '5px',
        borderBottomRightRadius: '2px',
        borderTopRightRadius: '2px',
        position: 'absolute',
        left: '50%',
        top: '5px'
    }
}))

const iconMap: { [key: string]: { icon: string, color: string } } = {
    'clearSky': { icon: mdiWeatherSunny, color: '#FF8C20' },
    'fewClouds': { icon: mdiWeatherPartlyCloudy, color: '#0791EC' },
    'scatteredClouds': { icon: mdiWeatherCloudy, color: '#0791EC' },
    'brokenClouds': { icon: mdiWeatherCloudy, color: '#0791EC' },
    'rain': { icon: mdiWeatherRainy, color: '#030155' },
    'showerRain': { icon: mdiWeatherPouring, color: '#030155' }
}

const tempToWidth = (temp: number) => {
    const drawnTemp = temp <= 40 ? temp : 40
    return (2.5 * drawnTemp) / 2
}
