import { CategoryRepository } from '../../repositories/implementations';
import { ListCategoriesController } from './list-categories-controller';
import { ListCategoriesUseCase } from './list-categories-use-case';

const categoryRepository = CategoryRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export {listCategoriesController};
