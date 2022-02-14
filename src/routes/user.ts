import express from 'express';
import controller from '../controllers/user';
import asyncHandler from 'express-async-handler';
import { validateQuery } from '../middleware/validate';
import passport from "passport";

const router = express.Router();

router.get('/:id', validateQuery, asyncHandler(controller.getUserById));
router.get('/', passport.authenticate('jwt',{ session: false }), validateQuery, asyncHandler(controller.getUsers));

export default router;