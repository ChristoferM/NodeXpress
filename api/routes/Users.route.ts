import {Router , Request, Response} from 'express';
import UserController from "../controllers/UsersController";
const usersRouter =Router();


usersRouter.get("/",UserController.getAll )
usersRouter.get("/saludar/:name",UserController.saludar);

export default usersRouter;
