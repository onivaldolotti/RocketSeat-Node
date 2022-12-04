import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors';
import { ISpecificationRepository } from '../../repositories/interfaces';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationRepository')
    private specificationRepository: ISpecificationRepository
  ) { }

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists = await this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError(`Specification ${name} already exists`);
    }

    await this.specificationRepository.create({ name, description });
  }
}
