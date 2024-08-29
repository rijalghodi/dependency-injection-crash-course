import { User } from "../types";
import { DbService } from "./DbService";

export class UserService {
  constructor() {
    console.log("-- User Service initialized --");
  }

  getAllUser(): User[] | null {
    const db = new DbService(); // <-- Class initialization, this is a problem
    const users = db.data;
    console.log("Fetching all user data...");
    return users;
  }

  getUser(id: string): User | null {
    const db = new DbService(); // <-- Class initialization, this is a problem
    const data = db.data.find((value) => value.id === id);
    console.log("Fetching single user data...");
    if (!data) {
      return null;
    }
    return data;
  }
}
