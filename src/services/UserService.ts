import { User } from "../types";
import { DbService } from "./DbService";

export class UserService {
  constructor() {
    console.log("-- User Service instance created --");
  }

  getAllUser(): User[] | null {
    const db = new DbService(); // <-- Class initialization, this is a problem
    const users = db.data;
    console.log("Fetching all user data...");
    return users;
  }
}
