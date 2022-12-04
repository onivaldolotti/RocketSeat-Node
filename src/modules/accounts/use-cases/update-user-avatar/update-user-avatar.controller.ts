import { Request, response, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateUserAvatarUseCase } from './update-user-avatar.use-case';

export class UpdateUserAvatarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;

    const avatarFile = req.file.filename;

    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

    await updateUserAvatarUseCase.execute({user_id: id, avatarFile});

    return res.status(204).send();
  }
}
