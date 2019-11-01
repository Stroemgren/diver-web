import { Coordinate } from "diver-models";

export type IWeatherForecastDay = {
    temperature: number
    description: string
    icon: string
}

export type IWeatherForecast = {
    coordinate: Coordinate,
    days: IWeatherForecastDay[]
}