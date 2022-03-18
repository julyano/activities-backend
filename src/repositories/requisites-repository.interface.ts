//import { Activity } from "../models/activity";

import { RequisiteInput } from "../entities/requisite";

export interface IRequisitesRepository {
    //findByActivityTitle(activity_title: string): Promise<ActivityOuput>;
    //find(suggested_weather_conditions: string): Promise<string[]>;
    save(requisite: RequisiteInput): Promise<number>
}