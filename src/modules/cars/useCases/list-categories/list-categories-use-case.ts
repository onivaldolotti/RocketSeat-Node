import { CategoryModel } from '../../model';
import { ICategoryRepository } from '../../repositories/interfaces';

export class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}
  execute(): CategoryModel[] {
    return this.categoryRepository.list();
  }
}
