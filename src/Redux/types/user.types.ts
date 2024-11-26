export interface IUser {
  _id: string;
  username: string;
  email: string;
  fullName: string;
  gender: string;
  phoneNumber: string;
  city: string;
}

export interface UserState {
  user: IUser | null;
  isUser: boolean;
  message: string;
  loading: boolean;
}
