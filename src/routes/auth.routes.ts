import { Router } from 'express';
import { AuthUserController } from '../modules/accounts/use-cases/auth-user';

export const authRoutes = Router();

const authUserController =  new AuthUserController();

authRoutes.post('/sessions', authUserController.handle);
