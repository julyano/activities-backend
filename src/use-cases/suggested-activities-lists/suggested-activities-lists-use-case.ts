import { IOpenWeatherMapProvider } from "../../providers/open-weather-map-provider.interface";
import { IActivitiesRepository } from "../../repositories/activities-repository.interface";

export class SuggestedActivitiesListsUseCase {
  constructor(
    private provider: IOpenWeatherMapProvider,
    private repository: IActivitiesRepository) {}

  async execute(city: string): Promise<any> {  
    try {
      let cityWeatherResult = await this.provider.cityWeather(city);      
      let suggested_weather_conditions = cityWeatherResult?.weather[0]?.main;
      
      if (!suggested_weather_conditions) {
        throw new Error('erro');
      }
      
      let list = await this.repository.find(suggested_weather_conditions);
      return list;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}