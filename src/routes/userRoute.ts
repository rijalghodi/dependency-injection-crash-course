import { Request, Response, Router } from "express";
import { userService } from "../container";

const router = Router();

router.get("/user", (_: Request, res: Response) => {
  const data = userService.getAllUser();
  res.send(data);
});

router.get("/user/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const data = userService.getUser(id);
  res.send(data);
});

export default router;
