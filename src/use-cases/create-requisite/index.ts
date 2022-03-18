import { MysqlDBRequisitesRepository } from "../../repositories/implementations/mysqldb-requisites-repository";
import { CreateRequisiteController } from "./create-requisite-controller";
import { CreateRequisiteUseCase } from "./create-requisite-use-case";

const mysqlDbRequisitesRepository = new MysqlDBRequisitesRepository();
const createRequisiteUseCase = new CreateRequisiteUseCase(mysqlDbRequisitesRepository);
const createRequisiteController = new CreateRequisiteController(createRequisiteUseCase)
  
export { createRequisiteUseCase, createRequisiteController }