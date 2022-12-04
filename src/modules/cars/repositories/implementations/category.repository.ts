import { getRepository, Repository } from 'typeorm';
import { CategoryEntity } from '../../entities';
import { ICategoryRepository, ICreateCategoryDto } from '../interfaces';

export class CategoryRepository implements ICategoryRepository
{
  private repository: Repository<CategoryEntity>;

  constructor(){
    this.repository = getRepository(CategoryEntity);
  }

  async create({name, description}: ICreateCategoryDto): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);
  }

  async list(): Promise<CategoryEntity[]> {
    return await this.repository.find();
  }

  async findByName(name: string): Promise<CategoryEntity> {
    return await this.repository.findOne({name});
  }
}
