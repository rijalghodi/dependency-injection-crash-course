import { Request, Response, Router } from "express";
import { container } from "../container-instance";
import { UserService } from "../services/UserService";

const router = Router();

router.get("/user", (_: Request, res: Response) => {
  /**
   * User Service Resolve
   *
   * The user service is registered in the container at build time.
   * (See /container-instance.ts for detailed explanation)
   *
   * Resolving the user service here will:
   * - Create a new instance if none exists in the container
   * - Return the existing instance if already present
   */
  const userService = container.resolve<UserService>("user");
  const data = userService.getAllUser();
  res.send(data);
});

export default router;
