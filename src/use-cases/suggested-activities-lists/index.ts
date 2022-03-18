import { OpenWeatherMapProvider } from "../../providers/implementations/open-weather-map-provider";
import { MysqlDBActivitiesRepository } from "../../repositories/implementations/mysqldb-activities-repository";
import { SuggestedActivitiesListsController } from "./suggested-activities-lists-controller";
import { SuggestedActivitiesListsUseCase } from "./suggested-activities-lists-use-case";

const openWeatherMapProvider = new OpenWeatherMapProvider();
const activitiesRepositor = new MysqlDBActivitiesRepository();
const suggestedActivitiesListUseCase = new SuggestedActivitiesListsUseCase(openWeatherMapProvider, activitiesRepositor);
const suggestedctivitiesListsController = new SuggestedActivitiesListsController(suggestedActivitiesListUseCase);

export { suggestedActivitiesListUseCase, suggestedctivitiesListsController }