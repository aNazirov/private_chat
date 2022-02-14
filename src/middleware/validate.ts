import validator from 'validator';
import { NextFunction, Request, Response } from 'express';
import { customErrorHandler } from '../utils';


export const validateAuth = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  let message: string[] = [];
  if (!email) message = [...message, 'Поле email не должно быть пустым'];
  if (email && !validator.isEmail(email)) message = [...message, 'Невалидный адрес email'];
  if (!password) message = [...message, 'Пароль не может быть пустым'];
  if (message.length) return customErrorHandler(res, { message }, 422);
  next();
};

export const validateQuery = (req: Request, res: Response, next: NextFunction) => {
  const { page, limit } = req.query;
  let message: string[] = [];

  if ((page || page === '') && !validator.isInt(page.toString())) message = [...message, 'Параметр запроса page должент быть числом'];
  if ((limit || limit === '') && !validator.isInt(limit.toString())) message = [...message, 'Параметр запроса limit должент быть числом'];

  if (message.length) return customErrorHandler(res, { message }, 422);
  next();
};