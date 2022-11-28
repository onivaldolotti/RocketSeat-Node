import { CategoryModel } from '../../model';
import { ICreateCategoryDto } from '../interfaces';



export class CategoryRepository
{
  private categories: CategoryModel[];

  private static INSTANCE: CategoryRepository;

  private constructor(){
    this.categories = [];
  }

  public static getInstance(): CategoryRepository {
    if(!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository();
    }

    return CategoryRepository.INSTANCE;
  }

  create({name, description}: ICreateCategoryDto): void {
    const category = new CategoryModel();

    Object.assign(category,{
      name,
      description,
      createdAt: new Date(),
    });

    this.categories.push(category);
  }

  list(): CategoryModel[] {
    return this.categories;
  }

  findByName(name: string): CategoryModel|undefined {
    return this.categories.find(c => c.name === name);
  }
}
