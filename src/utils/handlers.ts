import { NextFunction, Request, Response } from 'express';
import { IError } from '../interfaces';

export const logErrors = (error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(error.stack);
  next(error);
}

export const clientErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (req.xhr) {
    res.status(400).json({ message: 'Server error' });
  } else {
    next(error);
  }
};

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    status: 'error',
    message: 'Server error'
  })
}
export const errorNotFound = (req: Request, res: Response) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found'
  })
}

export const customErrorHandler = (res: Response, error: IError | Error, status: number = 500) => {
  res.status(status).json({
    status: 'error',
    message: error.message ? error.message : error,
  });
};