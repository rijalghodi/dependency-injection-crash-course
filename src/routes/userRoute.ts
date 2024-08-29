// src/routes/userRoute.ts
import { Request, Response, Router } from "express";
import { userService } from "../container";

const router = Router();

router.get("/user", (_: Request, res: Response) => {
  const userData = userService.getUser();
  res.send(userData);
});

export default router;
