import { ISpecificationRepository } from '../../repositories/interfaces';

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}
  execute({name, description}: IRequest): void {
    const specificationAlreadyExists = this.specificationRepository.findByName(name);

    if(specificationAlreadyExists) {
      throw new Error(`Specification ${name} already exists`);
    }

    this.specificationRepository.create({name, description});
  }
}
