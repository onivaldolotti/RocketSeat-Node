import { CategoryRepository } from '../../repositories/implementations';
import { CreateCategoryController } from './create-category-controller';
import { CreateCategoryUseCase } from './create-category-use-case';

const createCategoryRepository = CategoryRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(createCategoryRepository);

const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController };
