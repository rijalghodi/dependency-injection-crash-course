import { Request, Response, Router } from "express";
import { AuthService } from "../services/AuthService";

const router = Router();

router.post(
  "/login",
  (
    req: Request<undefined, { username: string; password: string }>,
    res: Response
  ) => {
    const body = req.body;
    const authService = new AuthService(); // <-- Class initialization, this is a problem
    const userData = authService.login(body.username, body.password);
    res.send(userData);
  }
);

export default router;
