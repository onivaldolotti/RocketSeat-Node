import { Request, Response } from 'express';
import { ImportCategoryUseCase } from './import-category-use-case';

export class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase){}
  handle(req: Request, res: Response): Response {
    const {file} = req;

    if (!file) {
      return res.json({ error: 'File is required' });
    }

    this.importCategoryUseCase.execute(file);

    return res.send();
  }
}
