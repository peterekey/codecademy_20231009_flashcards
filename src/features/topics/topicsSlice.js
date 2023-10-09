import { createSlice } from '@reduxjs/toolkit'

const sliceOptions = {
    name: "topics",
    // [Step 5] Has an initial state consisting of an object that includes one empty topics property 
    initialState: {
        topics: {}
    },
    reducers: {
        // [Step 5] Has an addTopic action, which stores the payload values in the state as a new topic object
        addTopic: (state, action) => {
            return {
                ...state,
                topics: {
                    [action.payload.id]: {
                        id: [action.payload.id],
                        name: [action.payload.name],
                        icon: [action.payload.icon],
                        // [Step 5] Each topc object should have a quizIds property
                        quizIds: []
                    }
                }
            }
        }
    }
}

// [Step 5] Create a slice named topicsSlice, and export the action creators & reducer
export const topicsSlice = createSlice(sliceOptions)

// [Step 5] Create selector that selects the topics object nested within initialState, and export the selector
export const selectTopics = (state) => state.topics