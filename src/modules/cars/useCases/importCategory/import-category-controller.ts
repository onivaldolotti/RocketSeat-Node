import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ImportCategoryUseCase } from './import-category-use-case';

export class ImportCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {file} = req;

    if (!file) {
      return res.json({ error: 'File is required' });
    }
    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    await importCategoryUseCase.execute(file);

    return res.status(201).send();
  }
}
