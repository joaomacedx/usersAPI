import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    const id = user_id.toString();
    try {
      const userAdmin = this.turnUserAdminUseCase.execute({ user_id: id });
      return response.json(userAdmin);
    } catch (error) {
      return response.status(404).json(error);
    }
  }
}

export { TurnUserAdminController };
