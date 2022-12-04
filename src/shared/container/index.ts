import { container } from 'tsyringe';
import { UserRepository } from '../../modules/accounts/repositories/implementations';
import { IUserRepository } from '../../modules/accounts/repositories/interfaces';
import { CategoryRepository, SpecificationRepository } from '../../modules/cars/repositories/implementations';
import { ICategoryRepository, ISpecificationRepository } from '../../modules/cars/repositories/interfaces';

container.registerSingleton<ICategoryRepository>(
  'CategoryRepository',
  CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
  'SpecificationRepository',
  SpecificationRepository
);

container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepository
);

