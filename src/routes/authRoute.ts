import { Request, Response, Router } from "express";
import { container } from "../container-instance";
import { AuthService } from "../services/AuthService";

const router = Router();

router.post(
  "/login",
  (
    req: Request<undefined, { username: string; password: string }>,
    res: Response
  ) => {
    const body = req.body;
    /**
     * Auth Service Resolve
     *
     * The auth service is registered in the container at build time.
     * (See /container-instance.ts for detailed explanation)
     *
     * Resolving the auth service here will:
     * - Create a new instance if none exists in the container
     * - Return the existing instance if already present
     */
    const authService = container.resolve<AuthService>("auth");
    const data = authService.login(body.username, body.password);
    if (!data) {
      res.status(404).send("User not found");
      return;
    }

    res.send(data);
  }
);

export default router;
