import { User } from "../types";
import { DbService } from "./DbService";

export class AuthService {
  private db: DbService;

  constructor(db: DbService) {
    this.db = db; // <-- Dependency Injection
    console.log("-- Auth Service instance created --");
  }

  login(username: string, password: string): User | null {
    console.log("login...");
    const users = this.db.data;
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (!user) return null;
    return user;
  }
}
