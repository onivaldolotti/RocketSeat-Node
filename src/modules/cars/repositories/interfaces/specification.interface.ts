import { SpecificationEntity } from '../../entities';

export interface ICreateSpecificationDto {
  name: string;
  description: string;
}

export interface ISpecificationRepository {
  create({name, description}: ICreateSpecificationDto): Promise<void>;
  findByName(name: string): Promise<SpecificationEntity>
}
