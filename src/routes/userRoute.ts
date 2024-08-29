import { Request, Response, Router } from "express";
import { UserService } from "../services/UserService";

const router = Router();

router.get("/user", (_: Request, res: Response) => {
  const userService = new UserService(); // <-- Class initialization, this is a problem
  const userData = userService.getAllUser();
  res.send(userData);
});

router.get("/user/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const userService = new UserService(); // <-- Class initialization, this is a problem
  const userData = userService.getUser(id);
  res.send(userData);
});

export default router;
