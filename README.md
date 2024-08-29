# Level 1 - Singleton

Class initialization can be expensive in terms of both computational resources and time. To minimize these costs, we should aim to initialize a class only once and reuse that instance wherever needed. This approach is known as the Singleton principle.

## The Problem with Non-Singleton Design

Without using the Singleton pattern, multiple instances of a class might be created unnecessarily, leading to increased resource usage and potential conflicts. For example, when processing payments, you might have several possible payment methods like PayPal, Stripe, Visa, or Mastercard. If each of these were instantiated repeatedly, it would waste resources and reduce performance.

## The Singleton Principle

The Singleton principle ensures that a class has only one instance throughout the application and provides a global point of access to that instance. This reduces memory consumption and improves performance by preventing redundant initializations.

## Implementation

### Step 1: Creating a Class

First, we create a class that needs to be reused. For example, consider the `DbService` class in `/src/services/DbService.ts`. If another class depends on `DbService`, instead of creating a new instance of `DbService` every time, we pass the existing instance through the constructor.

### Step 2: Using Dependency Injection

In `/src/services/UserService.ts`, we inject the `DbService` instance into `UserService` via the constructor, ensuring that `UserService` uses the same instance of `DbService`:

```ts
// /src/services/UserService.ts
export class UserService {
  private db: DbService;

  constructor(db: DbService) {
    this.db = db; // <-- Singleton
    console.log("UserService initialized");
  }

  // Additional methods...
}
```

### Step 3: Initialize All Classes at Startup

We then initialize all necessary class instances at startup, ensuring only one instance of each class is created. This is done in `/src/container.ts`:

```ts
// /src/container.ts
import { DbService } from "./services/DbService";
import { UserService } from "./services/UserService";

export const dbService = new DbService();
export const userService = new UserService(dbService); // <--
```

Here, `dbService` and `userService` are initialized once and can be reused throughout the application.

### Step 4: Using Singleton Instances Across the Application

Finally, we use these singleton instances wherever required, as shown in `/src/routes/userRoute.ts`:

```ts
// /src/routes/userRoute.ts
import { userService } from "../container";

const router = Router();

router.get("/user", (_: Request, res: Response) => {
  const data = userService.getAllUser();
  res.send(data);
});
```

By following this approach, we ensure that class instances are reused efficiently, conserving resources and improving application performance.

## Execution

Run the app and make a request. You will see the following output in the console:

```bash
container initialized
-- DB Service initialized --
-- User Service initialized --
Fetching all user data...
Fetching single user data...
Fetching all user data...
Fetching single user data...
Fetching single user data...
Fetching all user data...
```

Initially, the system initializes all classes (`DBService` and `UserService`). These instances are then reused for every request.
