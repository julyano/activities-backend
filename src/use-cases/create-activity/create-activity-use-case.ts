//import { Activity } from "../../models/activity";
import { ActivityInput } from "../../entities/activity";
import { IActivitiesRepository } from "../../repositories/activities-repository.interface";

export class CreateActivityUseCase {
    constructor(private repository: IActivitiesRepository) {

    }

    async execute(activityInput: ActivityInput): Promise<void> {
        try {
            const activityAlreadyExists = await this.repository.findByActivityTitle(activityInput.activity_title);
            
            if (activityAlreadyExists) {
                throw new Error("A atividade já existe");
            }
      
            this.repository.save(activityInput);
        } catch (error) {
            throw new Error(error.message);
        }
    }
}