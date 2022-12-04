import { Router } from 'express';
import multer from 'multer';
import { uploadConfig } from '../config';
import { ensureAuth } from '../middlewares';
import { CreateUserController } from '../modules/accounts/use-cases/create-user';
import { UpdateUserAvatarController } from '../modules/accounts/use-cases/update-user-avatar';

export const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig('./tmp/avatar'));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.patch('/avatar', ensureAuth ,uploadAvatar.single('avatar'), updateUserAvatarController.handle);
