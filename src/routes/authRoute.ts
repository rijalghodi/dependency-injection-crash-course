import { Request, Response, Router } from "express";
import { authService } from "../container";

const router = Router();

router.post(
  "/login",
  (
    req: Request<undefined, { username: string; password: string }>,
    res: Response
  ) => {
    const body = req.body;
    const data = authService.login(body.username, body.password);
    
    if (!data) {
      res.status(401).send("Invalid credentials");
      return;
    }
    res.send(data);
  }
);

export default router;
