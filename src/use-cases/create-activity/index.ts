import { MysqlDBActivitiesRepository } from "../../repositories/implementations/mysqldb-activities-repository";
import { MysqlDBRequisitesRepository } from "../../repositories/implementations/mysqldb-requisites-repository";
import { CreateRequisiteUseCase } from "../create-requisite/create-requisite-use-case";
import { CreateActivityController } from "./create-activity-controller";
import { CreateActivityUseCase } from "./create-activity-use-case";

const mysqlDbActivitiesRepository = new MysqlDBActivitiesRepository();
const createActivityUseCase = new CreateActivityUseCase(mysqlDbActivitiesRepository);
const mysqlDbRequisitesRepository = new MysqlDBRequisitesRepository();
const createRequisiteUseCase = new CreateRequisiteUseCase(mysqlDbRequisitesRepository);
const createActivityController = new CreateActivityController(createActivityUseCase, createRequisiteUseCase)
  
export { createActivityUseCase, createActivityController }