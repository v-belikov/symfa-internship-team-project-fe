export interface ILesson {
  id: string;
  duration: number;
  title: string;
  materialPath: string;
}

interface IAvatar {
  id: string;
  avatarPath: string;
}

interface ITeacher {
  id: string;
  name: string;
  surname: string;
  userId: string;
  avatar: IAvatar;
}

export interface ICourse {
  id: string;
  title: string;
  description: string;
  lessons: Array<ILesson>;
  logo: string;
  teacher: ITeacher;
}
