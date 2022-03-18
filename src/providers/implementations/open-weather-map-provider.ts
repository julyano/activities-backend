import { IOpenWeatherMapProvider } from "../open-weather-map-provider.interface";
import fetch from 'cross-fetch';

export class OpenWeatherMapProvider implements IOpenWeatherMapProvider {
  constructor() { }

  async cityWeather(city: string): Promise<any> {
    let url = `${process.env.OPEN_WEATHER_MAP_URL}${process.env.OPEN_WEATHER_MAP_VERSION}weather?q=${city}&units=metric&appid=${process.env.OPEN_WEATHER_MAP_APPID}`;

    try {
      const res = await fetch(url);
      return await res.json();
    } catch (err) {
      throw new Error(err.message);
    }
  }
}