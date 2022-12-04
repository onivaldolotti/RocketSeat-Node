import { getRepository, Repository } from 'typeorm';
import { ICreateUserDto } from '../../dto';
import { UserEntity } from '../../entities';
import { IUserRepository } from '../interfaces';

export class UserRepository implements IUserRepository {
  private repository: Repository<UserEntity>;

  constructor() {
    this.repository = getRepository(UserEntity);
  }

  async findById(id: string): Promise<UserEntity> {
    return await this.repository.findOne(id);
  }

  async findByEmail(email: string): Promise<UserEntity> {
    return await this.repository.findOne({email});
  }

  async create(input: ICreateUserDto): Promise<void> {
    const user = this.repository.create(input);

    await this.repository.save(user);
  }

}
