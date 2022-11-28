import { SpecificationRepository } from '../../repositories/implementations';
import { CreateSpecificationController } from './create-specification-controller';
import { CreateSpecificationUseCase } from './create-specification-use-case';

const specificationRepository = SpecificationRepository.getInstance();

const createSpeficiationUseCase = new CreateSpecificationUseCase(specificationRepository);

const createSpecificationController = new CreateSpecificationController(createSpeficiationUseCase);

export { createSpecificationController };
