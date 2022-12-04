import { getRepository, Repository } from 'typeorm';
import { SpecificationEntity } from '../../entities';
import { ICreateSpecificationDto, ISpecificationRepository } from '../interfaces';

export class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<SpecificationEntity>;

  constructor() {
    this.repository = getRepository(SpecificationEntity);
  }

  async findByName(name: string): Promise<SpecificationEntity> {
    return await this.repository.findOne({name});
  }

  async create({ name, description }: ICreateSpecificationDto): Promise<void> {
    const specification = this.repository.create({name, description});

    await this.repository.save(specification);
  }
}
