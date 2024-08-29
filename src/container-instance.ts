import { Container } from "./container";
import { AuthService } from "./services/AuthService";
import { DbService } from "./services/DbService";
import { UserService } from "./services/UserService";

/**
 * This file runs will run during initial application build, because
 * it's imported in both authRoute.ts and userRoute.ts.
 *
 * But only once, becuse JavaScript's module caching:
 *
 * 1. On first import: The file is executed and its exports are cached.
 * 2. On subsequent imports: The cached exports are used, skipping re-execution.
 *
 * To verify this behavior, check the console output below. You should see
 * log messages from this file only once
 */
console.log("container instance run");

/**
 * Here, we create container instance and export it.
 */
export const container = new Container();

/**
 * Then, we register services one by one. Remember: we just register
 * the class, not the instance.
 */
container.register<DbService>("db", DbService);

/**
 * Some services need other services. so we provide this dependencies.
 */
container.register(
  "user",
  () => new UserService(container.resolve<DbService>("db"))
);

container.register(
  "auth",
  () => new AuthService(container.resolve<DbService>("db"))
);
