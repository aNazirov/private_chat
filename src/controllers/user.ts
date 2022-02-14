import { customErrorHandler } from '../utils';
import { config } from 'dotenv';
import { Request, Response } from 'express';
import { Users } from '../models';

config();

interface IRequest extends Request {
  user: any;
}

class Controller {

  async getUserById(req: IRequest, res: Response) {
    const { id } = req.params;

    try {
      const user = await Users.default.findById(+id);

      if (!user) return customErrorHandler(res, { message: `Пользователя с id ${id} не найдено` }, 404);

      res.status(200).json({
        status: 'ok',
        message: user,
      });

    } catch (e) {
      customErrorHandler(res, { message: e });
    }
  };

  async getUsers(req: IRequest, res: Response) {
    const { page, limit = 10 } = req.query;

    try {
      const users = await Users.default.findMany(+page, +limit);

      res.status(200).json({
        status: 'ok',
        message: users,
      });

    } catch (e) {
      customErrorHandler(res, { message: e });
    }
  };
}

export default new Controller();