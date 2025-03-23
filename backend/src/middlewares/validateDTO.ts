import { Request, Response, NextFunction } from 'express';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ValidationError } from '../errors/ValidationError';


export const validateDTO = (type: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const dto = plainToClass(type, req.body);
        const errors = await validate(dto)
        if (errors.length > 0) {
            const errorMessages = errors.map(error => Object.values(error.constraints || {})).flat().join(', ');
            throw new ValidationError(`Erro de validação: ${errorMessages}`);
        }
        next();
    };
};