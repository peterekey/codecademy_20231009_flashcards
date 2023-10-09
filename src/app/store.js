import { configureStore } from "@reduxjs/toolkit";
// [Step 6] import reducers
import topicsReducer from '../features/topics/topicsSlice'

export default configureStore({
  reducer: {
    // [Step 6] Add the topics slice to the app's store
    topics: topicsReducer
  },
});
