import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Answer, QuestionnaireState } from './types';

const initialState: QuestionnaireState = {
  questions: [
    { id: 1, text: 'Вы любите программировать?' },
    { id: 2, text: 'Вам нравится React?' },
    { id: 3, text: 'Вы используете TypeScript?' },
    { id: 4, text: 'Вы предпочитаете темную тему?' }
  ],
  answers: [],
  isSubmitted: false,
  score: 0
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    answerQuestion: (state, action: PayloadAction<Answer>) => {
      const existingAnswerIndex = state.answers.findIndex(
        answer => answer.questionId === action.payload.questionId
      );

      if (existingAnswerIndex !== -1) {
        state.answers[existingAnswerIndex] = action.payload;
      } else {
        state.answers.push(action.payload);
      }
    },
    submitQuestionnaire: state => {
      state.isSubmitted = true;
      state.score = state.answers.filter(answer => answer.value).length;
    },
    resetQuestionnaire: state => {
      state.answers = [];
      state.isSubmitted = false;
      state.score = 0;
    }
  }
});

export const { answerQuestion, submitQuestionnaire, resetQuestionnaire } =
  questionnaireSlice.actions;
export default questionnaireSlice.reducer;
