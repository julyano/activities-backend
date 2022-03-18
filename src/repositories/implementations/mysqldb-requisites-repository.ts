import Requisite, { RequisiteInput } from "../../entities/requisite";
import { IRequisitesRepository } from "../requisites-repository.interface";

export class MysqlDBRequisitesRepository implements IRequisitesRepository {
  async save(requisite: RequisiteInput): Promise<number> {
    return (await Requisite.create(requisite)).id
  }
}