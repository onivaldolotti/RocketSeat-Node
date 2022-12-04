import { inject, injectable } from 'tsyringe';
import { CategoryEntity } from '../../entities';
import { ICategoryRepository } from '../../repositories/interfaces';

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository
  ) { }

  async execute(): Promise<CategoryEntity[]> {
    return await this.categoryRepository.list();
  }
}
