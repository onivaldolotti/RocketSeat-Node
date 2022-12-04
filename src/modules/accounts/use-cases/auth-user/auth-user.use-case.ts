import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '../../repositories/interfaces';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { AppError } from '../../../../errors';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
export class AuthUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute({email, password}: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if(!user) {
      throw new AppError('Email or password incorrect');
    }

    const passwordMatch = compare(password, user.password);

    if(!passwordMatch) {
      throw new AppError('Email or password incorrect');
    }

    const token = sign({}, '123', {
      subject: user.id,
      expiresIn: '1d'
    });

    return {
      user: {name: user.name, email: user.email},
      token,
    };
  }
}
