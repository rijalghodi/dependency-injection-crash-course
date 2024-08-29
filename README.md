# Level 2 - Dependency Injection Container

While the Singleton pattern addresses class initialization issues, it introduces new challenges:

1. Eager Loading: All class instances are created at build time, preventing lazy loading.
2. Decentralized Management: Instance creation and management are scattered across the codebase.

Solution: Dependency Injection (DI) Container

A DI Container offers several advantages:

1. Centralized Management: A single 'Container' class stores and manages all class instances.
2. Lazy Loading: Instances can be created on-demand, improving performance and resource usage.
3. Dependency Resolution: The container handles class dependencies automatically.
4. Flexible Registration: Classes can be easily registered and configured within the container.

## Implementation:

- Create a `Container` class to store and manage class instances (Open `/src/container`)
- Register classes and their dependencies in the container (Open `/src/container-instance`)
- Resolve instances through the container when needed (Open `/src/routes/authRoute` and `/src/routes/userRoute`)

## Execution

Try to run `yarn dev` and do some requests.

First running app:

```bash
container instance run
-- Factory db registered --
-- Factory user registered --
-- Factory auth registered --
```

After request `GET /user`

```bash
-- DB Service instance created --
-- User Service instance created --
Fetching all user data...
```

After request `POST /login`

```bash
-- Auth Service instance created --
login...
```

After request `GET /user` again:

```bash
Fetching all user data...
```

After request `POST /login` again:

```bash
login...
```
