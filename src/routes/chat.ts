import express from 'express';
import controller from '../controllers/chat';
import asyncHandler from "express-async-handler"
import passport from "passport";

const router = express.Router();

router.post('/create', passport.authenticate('jwt',{ session: false }), asyncHandler(controller.create));
router.get('/:id', passport.authenticate('jwt',{ session: false }), asyncHandler(controller.create));
router.get('/', passport.authenticate('jwt',{ session: false }), asyncHandler(controller.create));

export default router;