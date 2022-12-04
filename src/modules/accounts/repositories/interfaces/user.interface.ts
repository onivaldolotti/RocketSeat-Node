import { ICreateUserDto } from '../../dto';
import { UserEntity } from '../../entities';

export interface IUserRepository {
  create(input: ICreateUserDto): Promise<void>
  findByEmail(email: string): Promise<UserEntity>
  findById(id: string): Promise<UserEntity>
}
