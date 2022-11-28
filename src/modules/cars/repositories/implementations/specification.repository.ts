import { SpecificationModel } from '../../model';
import { ICreateSpecificationDto, ISpecificationRepository } from '../interfaces';

export class SpecificationRepository implements ISpecificationRepository {
  private specifications: SpecificationModel[];

  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationRepository {
    if(!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }

    return SpecificationRepository.INSTANCE;
  }

  findByName(name: string): SpecificationModel | undefined {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );

    return specification;
  }

  create({ name, description }: ICreateSpecificationDto): void {
    const specification = new SpecificationModel();

    Object.assign(specification, { name, description, createdAt: new Date() });

    this.specifications.push(specification);
  }
}
