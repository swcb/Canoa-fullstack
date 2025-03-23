import { Request, Response, NextFunction } from "express";
import { ValidationError } from "../errors/ValidationError";


export const validateId = (req: Request, res: Response, next: NextFunction): void => {
    const id = req.query.id as string | undefined;

    if (!id) {
        next(new ValidationError('ID não fornecido'));
    } else {
        next();
    }
}