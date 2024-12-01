import { Router, Request, Response } from "express";
import { createUsersController } from "./useCases/CreateUser";

const router = Router()

router.post('/users', async (request: Request, response: Response): Promise<any> => {
  return createUsersController.handle(request, response)
});

export { router };