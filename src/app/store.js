import { configureStore } from "@reduxjs/toolkit";
// [Step 6] import reducers
import topicsReducer from '../features/topics/topicsSlice'
// [Step 9] Import the reducer
import quizzesReducer from '../features/quizzes/quizzesSlice'
// [Step 14] Import the reducer
import cardsReducer from '../features/cards/cardsSlice'

export default configureStore({
  reducer: {
    // [Step 6] Add the topics slice to the app's store
    topics: topicsReducer,
    // [Step 9] Add the quizzes slice to the app's store
    quizzes: quizzesReducer,
    // [Step 14] Add the cards slice to the app's store
    cards: cardsReducer
  },
});
