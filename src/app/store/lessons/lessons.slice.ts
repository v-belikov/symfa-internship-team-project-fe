import { createSlice } from '@reduxjs/toolkit';
import { ILessonComplete } from './lesson-complete.interface';

interface ILessonState {
  lessons: ILessonComplete[];
}

const initialState: ILessonState = {
  lessons: [],
};

const lessonsSlice = createSlice({
  name: 'lessons',
  initialState,
  reducers: {
    completeLesson: (state, action) => {
      console.log(state, action);
    },
  },
});

export const lessonsReducer = lessonsSlice.reducer;
export const { completeLesson } = lessonsSlice.actions;
