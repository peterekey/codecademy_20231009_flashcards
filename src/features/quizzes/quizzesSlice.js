import { createSlice } from '@reduxjs/toolkit'

// [Step 9] Has initial state consisting of an object that includes one property, quizzes, which corresponds to an empty object. This inner quizzes object will eventually hold all quizzes keyed by id.
const initialState = {
    quizzes: {}
}

const sliceOptions = {
    name: "quizzes",
    initialState: initialState,
    reducers: {
        // [Step 9] Has an addQuiz action. This action will receive a payload of the form { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}.
        addQuiz: (state, action) => {
            return {
                ...state,
                quizzes: {
                    ...state.quizzes,
                    [action.payload.id]: {
                        id: action.payload.id,
                        name: action.payload.name,
                        topicId: action.payload.topicId,
                        cardIds: action.payload.cardIds
                    }
                }
            }
        }
    }
}

export const quizzesSlice = createSlice(sliceOptions)

// [Step 9] Has a selector which returns all quizzes from state. Export the selector.
export const selectQuizzes = (state) => state.quizzes

// [Step 9] Export the the action creators and reducer that your slice generates
export const { addQuiz } = quizzesSlice.actions
export default quizzesSlice.reducer