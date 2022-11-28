import { CategoryRepository } from '../../repositories/implementations';
import { ImportCategoryController } from './import-category-controller';
import { ImportCategoryUseCase } from './import-category-use-case';

const categoryRepository = CategoryRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController };
