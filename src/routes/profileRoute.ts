// src/routes/userRoute.ts
import { Request, Response, Router } from "express";
import { profileService } from "../container";

const router = Router();

router.get("/profile", (_: Request, res: Response) => {
  const userData = profileService.getProfile();
  res.send(userData);
});

export default router;
