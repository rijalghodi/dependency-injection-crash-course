import { Logger } from "./services/Logger";
import { ProfileService } from "./services/ProfileService";
import { UserService } from "./services/UserService";

console.log("container initialized");

export const logger = new Logger();
export const userService = new UserService(logger);
export const profileService = new ProfileService(logger, userService);
