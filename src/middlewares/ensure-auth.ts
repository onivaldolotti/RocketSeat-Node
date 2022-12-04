import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../errors';
import { UserRepository } from '../modules/accounts/repositories/implementations';

interface IPayload {
  sub: string;
}

export async function ensureAuth(req: Request, res:Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('token missing from request', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, '123') as IPayload;
    const userRepository = new UserRepository();
    const user = userRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not exists', 401);
    }

    req.user = {
      id: user_id,
    };

    next();
  }catch (e) {
    throw new AppError('invalid token', 401);
  }
}
