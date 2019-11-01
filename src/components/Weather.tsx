import React from 'react'
import { connect } from 'react-redux'
import { StoreState } from '../store'
import { fetchWeatherForecast } from '../store/weather/thunks'
import { IWeatherForecast } from '../models/IWeatherForecast'
import { Coordinate } from 'diver-models'
import { weatherForCoordinate } from '../store/weather/selectors'
import WeatherDay from './WeatherDay'

type Props = {
    coordinate: Coordinate
    weatherForecast: IWeatherForecast | null
    fetchWeatherForecast: typeof fetchWeatherForecast
}

const mapStateToProps = (state: StoreState, ownProps: Pick<Props, 'coordinate'>) => ({
    weatherForecast: weatherForCoordinate(state, ownProps.coordinate)
})

const mapDispatchToProps = (dispatch: any) => ({
    fetchWeatherForecast: (coordinate: Coordinate) => dispatch(fetchWeatherForecast(coordinate))
})

class Weather extends React.Component<Props, {}> {
    componentDidMount() {
        this.props.fetchWeatherForecast(this.props.coordinate)
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.coordinate !== this.props.coordinate) {
            this.props.fetchWeatherForecast(this.props.coordinate)
        }
    }

    render() {
        return (
            <>
                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '24px' }}>
                    <WeatherDay title="Sun" icon="clearSky" wind={3.6} minTemp={14} maxTemp={23} />
                    <WeatherDay title="Mon" icon="showerRain" wind={3.2} minTemp={13} maxTemp={23} />
                    <WeatherDay title="Tue" icon="fewClouds" wind={3.4} minTemp={10} maxTemp={18} />
                    <WeatherDay title="Wed" icon="scatteredClouds" wind={2.1} minTemp={10} maxTemp={19} />
                    <WeatherDay title="Thu" icon="scatteredClouds" wind={1.8} minTemp={17} maxTemp={26} />
                </div>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
