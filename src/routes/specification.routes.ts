import { Router } from 'express';
import { ensureAuth } from '../middlewares';

import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/create-specification-controller';

export const specificationRoutes = Router();

specificationRoutes.use(ensureAuth);

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.post('/', createSpecificationController.handle);
