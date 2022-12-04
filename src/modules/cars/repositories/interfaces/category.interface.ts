import { CategoryEntity } from '../../entities';

export interface ICreateCategoryDto {
  name: string;
  description: string;
}

export interface ICategoryRepository{
  findByName(name: string): Promise<CategoryEntity>;
  create({name, description}: ICreateCategoryDto): Promise<void>;
  list(): Promise<CategoryEntity[]>;
}
