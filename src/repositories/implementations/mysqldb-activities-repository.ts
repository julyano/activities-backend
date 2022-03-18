//import { Activity } from "../../models/activity";
import Activity, { ActivityAttributes, ActivityInput, ActivityOuput } from "../../entities/activity";
import { Requisite } from "../../entities/requisite";
import { IActivitiesRepository } from "../activities-repository.interface";

export class MysqlDBActivitiesRepository implements IActivitiesRepository {
  
  //private activities: Activity[] = [];

  async findByActivityTitle(activity_title: string): Promise<ActivityOuput> {
    //const activity = this.activities.find(activity => activity.activity_title === activity_title);
    return null;
  }

  async find(suggested_weather_conditions: string): Promise<string[]> {
    try {
      const activities = await Activity.findAll({
        attributes: ['activity_title'],
        where: {
          suggested_weather_conditions
        }
      });

      return activities.map((element) => element.activity_title);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async save(activity: ActivityInput): Promise<void> {
    try {
      await Activity.create(activity);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}