import { Router } from 'express';
import multer from 'multer';
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/create-category-controller';

import { ImportCategoryController } from '../modules/cars/useCases/importCategory/import-category-controller';
import { ListCategoriesController } from '../modules/cars/useCases/list-categories/list-categories-controller';

export const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp'
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post('/import', upload.single('file'), importCategoryController.handle);

