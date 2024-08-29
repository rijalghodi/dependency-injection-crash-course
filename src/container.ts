import { AuthService } from "./services/AuthService";
import { DbService } from "./services/DbService";
import { UserService } from "./services/UserService";

console.log("container initialized");

export const dbService = new DbService();
export const userService = new UserService(dbService); // <-- Singleton pattern
export const authService = new AuthService(dbService);
