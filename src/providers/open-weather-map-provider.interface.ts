export interface IOpenWeatherMapProvider {
    cityWeather(city: string): Promise<any>
}