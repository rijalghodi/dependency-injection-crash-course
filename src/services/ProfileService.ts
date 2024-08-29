import { Logger } from "./Logger";
import { UserService } from "./UserService";

interface Profile {
  id: string;
  fullname: string;
  userId: string;
  phone: string;
  address: string;
}

export class ProfileService {
  private logger: Logger;
  private userService: UserService;

  constructor(logger: Logger, userService: UserService) {
    this.userService = userService;
    this.logger = logger;

    console.log("ProfileService initialized");
  }

  getProfile(): Profile | undefined {
    this.logger.log("Fetching user id...");
    const { id } = this.userService.getUser();

    this.logger.log("Fetching user profile...");
    const profile = profiles.find((value) => value.userId === id);

    return profile;
  }
}

// Database simulation
const profiles: Profile[] = [
  {
    id: "1",
    fullname: "John Doe",
    userId: "1",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: "2",
    fullname: "Jane Smith",
    userId: "2",
    phone: "9876543210",
    address: "456 Oak St, Anytown, USA",
  },
];
