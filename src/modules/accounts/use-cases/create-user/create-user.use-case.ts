import { inject, injectable } from 'tsyringe';
import { ICreateUserDto } from '../../dto';
import { IUserRepository } from '../../repositories/interfaces';
import { hash } from 'bcrypt';
import { AppError } from '../../../../errors';

@injectable()
export class CreateUserUseCase {

  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository
  ) {}

  async execute(input: ICreateUserDto): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(input.email);

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const passwordHash = await hash(input.password, 8);

    await this.usersRepository.create({...input, password: passwordHash});
  }
}
