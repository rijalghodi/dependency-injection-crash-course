# Level 0 - The Problem of Class Initialization

Class initialization can be costly in terms of memory and computing power. This problem commonly occurs in beginner Express projects where classes are repeatedly instantiated.

For instance, in `/src/routes/userRoute.ts`, you might see:

```js
router.get("/user", (_: Request, res: Response) => {
  const userService = new UserService(); // <-- Problematic class initialization
  const userData = userService.getAllUser();
  res.send(userData);
});
```

Running this app (`yarn dev`) and making requests to `/user` will create a new instance of `UserService` for each request

## Execution

After running first time:

```bash

```

After request GET /user:

```bash
-- User Service instance created --
-- DB Service instance created --
Fetching all user data...
```

After request POST /login

```bash
-- Auth Service instance created --
-- DB Service instance created --
login...
```

After request GET /user:

```bash
-- User Service instance created --
-- DB Service instance created --
Fetching all user data...
```

After request POST /login

```bash
-- Auth Service instance created --
-- DB Service instance created --
login...
```

As you see, everytime I hit endpoint, new services created

To address this, we will use the Singleton pattern to manage class instances. Check out the `level-1` branch to see how this is implemented.

Imagine the impact if 1,000 requests hit the service simultaneously. It would create 1,000 instances of both the `UserService` and `DB Service`, which is inefficient and problematic.
