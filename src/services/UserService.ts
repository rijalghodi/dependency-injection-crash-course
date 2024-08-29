import { User } from "../types";
import { DbService } from "./DbService";

export class UserService {
  private db: DbService;

  constructor(db: DbService) {
    this.db = db; // <-- Singleton
    console.log("-- User Service initialized --");
  }

  getAllUser(): User[] {
    console.log("Fetching all user data...");
    const users = this.db.data;
    return users;
  }

  getUser(id: string): User | null {
    console.log("Fetching single user data...");
    const users = this.db.data;
    const user = users.find((user) => user.id === id);
    if (!user) return null;
    return user;
  }
}
