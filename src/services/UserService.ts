import { Logger } from "./Logger";

interface User {
  username: string;
  id: string;
}

export class UserService {
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;

    console.log("UserService initialized");
  }

  getUser(): User {
    this.logger.log("Fetching user data...");
    return user;
  }
}

// Database simulation
const user = {
  username: "user123",
  id: "1",
};
