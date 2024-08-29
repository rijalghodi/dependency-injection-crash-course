type Constructor<T = any> = new (...args: any[]) => T;
type FactoryFunction<T> = () => T;

export class Container {
  private services: Map<string, Constructor | FactoryFunction<any>>;
  private singletons: Map<string, any>;

  constructor() {
    this.services = new Map();
    this.singletons = new Map();
  }

  // Register services with class constructors or factory functions
  register<T>(name: string, factory: Constructor<T> | FactoryFunction<T>) {
    console.log("-- Factory", name, "registered --");
    this.services.set(name, factory);
  }

  resolve<T>(name: string): T {
    if (this.singletons.has(name)) {
      return this.singletons.get(name);
    }

    const factory = this.services.get(name);

    if (!factory) {
      throw new Error(`Service '${name}' not found`);
    }

    let instance: T;

    if (this.isClass(factory)) {
      instance = new (factory as Constructor<T>)();
    } else {
      instance = (factory as Function)();
    }

    this.singletons.set(name, instance);
    // console.log("-- Instance", name, "created --");
    return instance;
  }

  // Utility method to check if a function is a class constructor
  private isClass(fn: Function): boolean {
    return /^class\s/.test(fn.toString());
  }
}
