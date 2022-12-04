import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from '.';

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, password, driverLicense, email } = req.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      name,
      password,
      driverLicense,
      email,
    });

    return res.status(201).send();
  }
}
