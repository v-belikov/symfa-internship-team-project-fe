export type UserType = {
  id: string;
  userId: string;
  name: string;
  surname: string;
  gender: string;
  age: number;
  email: string;
  avatar: IAvatar;
};

export interface IAvatar {
  id: string;
  avatarPath: string;
}
