export interface IUserRequest {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  discription: string;
  age: number;
  dateOfBirth: Date;
  address: string;
}

export interface IUserResponse {
  user: IUserRequest | null;
  token: string;
}
