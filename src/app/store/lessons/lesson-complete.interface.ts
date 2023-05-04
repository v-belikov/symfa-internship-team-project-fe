import { ILesson } from '@pages/courses';

export interface ILessonComplete {
  lesson: ILesson;
  isComplete: boolean;
}
