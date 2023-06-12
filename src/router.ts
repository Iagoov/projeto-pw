import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { AuthUserController } from "./controllers/User/AuthUserController";


const router = Router();

//Rotas USER ------------
router.post("/turistando/userinsert", new CreateUserController().handle)

router.post("/turistando/login", new AuthUserController().handle);

export { router };