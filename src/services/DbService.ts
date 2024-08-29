import { User } from "../types";

export class DbService {
  private _data: User[] = [
    {
      id: "1",
      fullname: "John Doe",
      phone: "1234567890",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: "2",
      fullname: "Jane Smith",
      phone: "9876543210",
      address: "456 Oak St, Anytown, USA",
    },
    {
      id: "3",
      fullname: "Bob Johnson",
      phone: "5555555555",
      address: "789 Pine St, Anytown, USA",
    },
    {
      id: "4",
      fullname: "Alice Lee",
      phone: "1111111111",
      address: "321 Cedar St, Anytown, USA",
    },
    {
      id: "5",
      fullname: "Tom Wilson",
      phone: "2222222222",
      address: "654 Birch St, Anytown, USA",
    },
  ];
  constructor() {
    console.log("-- DB Service initialized --");
  }

  get data(): User[] {
    return this._data;
  }
}
