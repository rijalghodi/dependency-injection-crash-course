import { User } from "../types";

export class DbService {
  private _data: User[] = [
    {
      id: "1",
      fullname: "John Doe",
      phone: "1234567890",
      address: "123 Main St, Anytown, USA",
      username: "johndoe",
      password: "password123",
    },
    {
      id: "2",
      fullname: "Jane Smith",
      phone: "9876543210",
      address: "456 Oak St, Anytown, USA",
      username: "janesmith",
      password: "password456",
    },
    {
      id: "3",
      fullname: "Bob Johnson",
      phone: "5555555555",
      address: "789 Pine St, Anytown, USA",
      username: "bobjohnson",
      password: "password789",
    },
    {
      id: "4",
      fullname: "Alice Lee",
      phone: "1111111111",
      address: "321 Cedar St, Anytown, USA",
      username: "alicelee",
      password: "password321",
    },
    {
      id: "5",
      fullname: "Tom Wilson",
      phone: "2222222222",
      address: "654 Birch St, Anytown, USA",
      username: "tomwilson",
      password: "password654",
    },
  ];
  constructor() {
    console.log("-- DB Service initialized --");
  }

  get data(): User[] {
    return this._data;
  }
}
