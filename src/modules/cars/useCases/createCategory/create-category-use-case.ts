import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors';
import { ICategoryRepository } from '../../repositories/interfaces';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository) { }
  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoryRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new AppError('Category already exists');
    }

    this.categoryRepository.create({ name, description });
  }
}
