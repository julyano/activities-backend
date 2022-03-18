import { Request, Response } from "express";
import { ActivityInput } from "../../entities/activity";
import { CreateRequisiteUseCase } from "../create-requisite/create-requisite-use-case";
import { CreateActivityUseCase } from "./create-activity-use-case";

export class CreateActivityController {
    constructor(
        private createActivityUseCase: CreateActivityUseCase,
        private createRequisiteUseCase: CreateRequisiteUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        let activity: ActivityInput = {} as any;
        
        const { activity_title,
            suggested_weather_conditions,
            unsuggested_weather_conditions,
            suggested_location,
            requisites
        } = request.body;
        
        activity.activity_title = activity_title;
        activity.suggested_weather_conditions = suggested_weather_conditions;
        activity.unsuggested_weather_conditions = unsuggested_weather_conditions;
        activity.suggested_location = suggested_location;

        try {
            const requisites_id = await this.createRequisiteUseCase.execute(requisites);

            if (!requisites_id) {
                throw new Error('Falha ao obter id do requisito');
            }

            activity.requisites_id = requisites_id;
            await this.createActivityUseCase.execute(activity);
    
            return response.status(201).send();  
        } catch (err) {
                return response.status(400).json({
                    message: err.message || 'Erro inesperado'
                });
            }
        }
}