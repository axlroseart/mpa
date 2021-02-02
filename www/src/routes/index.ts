import { Request, Response } from 'express';

export = function(req: Request, res: Response): void {
  require('./demo/no-framework')(req, res);
};
