import { Request, Response } from "express";
import { RequisiteInput } from "../../entities/requisite";
import { CreateRequisiteUseCase } from "./create-requisite-use-case";

export class CreateRequisiteController {
    constructor(private createRequisiteUseCase: CreateRequisiteUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        let requisite: RequisiteInput = {} as any;
        
        const { cost,
            participants_number,
        } = request.body;
        
        requisite.cost = cost;
        requisite.participants_number = participants_number        

        try {
            const result = await this.createRequisiteUseCase.execute(requisite);    
            return response.status(201).send(result);  
        } catch (err) {
                return response.status(400).json({
                    message: err.message || 'Erro inesperado'
                });
            }
        }
}