import React from 'react'
import { connect } from 'react-redux'
import { StoreState } from '../store'
import { fetchWeatherForecast } from '../store/weather/thunks'
import { Coordinate, FiveDayForecast } from 'diver-models'
import { weatherForCoordinate } from '../store/weather/selectors'
import WeatherDay from './WeatherDay'

type Props = {
    coordinate: Coordinate
    weatherForecast: FiveDayForecast| null
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
        const forecast = this.props.weatherForecast

        return (
            <>
                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '24px' }}>
                    {forecast && forecast.days.map(d =>
                        <WeatherDay key={d.weekday} title={d.weekday} icon={d.icon} wind={Math.round(d.windSpeed * 10) / 10} minTemp={Math.round(d.minTemp)} maxTemp={Math.round(d.maxTemp)} />  
                    )}
                </div>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
