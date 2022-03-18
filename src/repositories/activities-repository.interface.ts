//import { Activity } from "../models/activity";

import { ActivityInput, ActivityOuput } from "../entities/activity";

export interface IActivitiesRepository {
    findByActivityTitle(activity_title: string): Promise<ActivityOuput>;
    find(suggested_weather_conditions: string): Promise<string[]>;
    save(activity: ActivityInput): Promise<void>
}