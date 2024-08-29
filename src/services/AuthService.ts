import { User } from "../types";
import { DbService } from "./DbService";

export class AuthService {
  constructor() {
    console.log("-- Auth Service instance created --");
  }

  login(username: string, password: string): User | null {
    const db = new DbService(); // <-- Class initialization, this is a problem
    const user = db.data.find(
      (user) => user.username === username && user.password === password
    );
    console.log("login...");
    if (!user) {
      return null;
    }
    return user;
  }
}
