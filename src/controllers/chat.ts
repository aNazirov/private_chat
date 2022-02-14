import { Response } from 'express';
import { customErrorHandler } from '../utils';
import { config } from 'dotenv';
import {IRequest} from "../interface";

config();

class Controller {
  async create(req: IRequest, res: Response) {
      const { id } = req.user
      const { userId } = req.body

      try {

      res.status(200).json({
      });
    } catch (e) {
      customErrorHandler(res, { message: 'Во время получения токена что то пошло не так. Попробуйте снова' }, 500);
    }
  }

}

export default new Controller();