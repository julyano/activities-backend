import { Request, Response } from "express";
import { SuggestedActivitiesListsUseCase } from "./suggested-activities-lists-use-case";

export class SuggestedActivitiesListsController {
    constructor(private suggestedActivitiesListsUseCase: SuggestedActivitiesListsUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { city } = request.body;
        
        try {
            const result = await this.suggestedActivitiesListsUseCase.execute(city);
    
            return response.status(200).send(result);  
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Erro inesperado'
            });
        }
    }
}