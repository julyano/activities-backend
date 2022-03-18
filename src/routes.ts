import { Router } from "express";
import { createActivityController } from "./use-cases/create-activity";
import { createRequisiteController } from "./use-cases/create-requisite";
import { suggestedctivitiesListsController } from "./use-cases/suggested-activities-lists";

const router = Router();

router.post('/activities', (request, response) => {    
    return createActivityController.handle(request, response);
});

router.post('/requisites', (request, response) => {    
    return createRequisiteController.handle(request, response);
});

router.get('/list', (request, response) => {    
    return suggestedctivitiesListsController.handle(request, response);
});


export { router }