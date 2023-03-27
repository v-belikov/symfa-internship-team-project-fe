import { ILesson } from '@pages/courses-block';

export interface ILessonComplete {
  lesson: ILesson;
  isComplete: boolean;
}
