import { RequisiteInput } from "../../entities/requisite";
import { IRequisitesRepository } from "../../repositories/requisites-repository.interface";

export class CreateRequisiteUseCase {
    constructor(private repository: IRequisitesRepository) {}

    async execute(requisiteInput: RequisiteInput): Promise<number> {
        try {
            if (!requisiteInput) {
                throw new Error('O requisito precisa ser diferente de nulo');
            }

            if (!requisiteInput.participants_number) {
                throw new Error('O campo `participants_number` precisa ser diferente de nulo');
            }
            
            const result = await this.repository.save(requisiteInput);
            return result;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}