import { CategoryModel } from '../../model';

export interface ICreateCategoryDto {
  name: string;
  description: string;
}

export interface ICategoryRepository{
  findByName(name: string): CategoryModel|undefined;
  create({name, description}: ICreateCategoryDto): void;
  list(): CategoryModel[];
}
