import { createAction, createSlice } from '@reduxjs/toolkit'

const addNewQuiz = createAction('addNewQuiz')

const newQuizAdded = (action) => {
    return action.name === 'addQuiz'
}


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
                    ...state.topics,
                    [action.payload.id]: {
                        id: action.payload.id,
                        name: action.payload.name,
                        icon: action.payload.icon,
                        // [Step 5] Each topc object should have a quizIds property
                        quizIds: []
                    }
                }
            }
        }
    },
    // [Step 10] Add an action to your topic's slice that adds a quiz's id to the quizIds array of the topic with wqhich the newly created quiz is associated
    extraReducers: (builder) => {
        builder
            .addMatcher(newQuizAdded, (state, action) => {
                const topic = state.topics.find(topic => topic.id === action.payload.topicId)
                if (topic) {
                    return {
                        ...state,
                        topics: {
                            ...state.topics,
                            [action.payload.topicId]: {
                                quizIds: state.topics.quizIds.push(action.payload.id)
                            }
                        }
                    }
                }

            })
            .addDefaultCase((state, action) => {})
    }
}

// [Step 5] Create a slice named topicsSlice, and export the action creators & reducer
export const topicsSlice = createSlice(sliceOptions)

// [Step 5] Create selector that selects the topics object nested within initialState, and export the selector
export const selectTopics = (state) => state.topics

// [Step 8] Need to export the addTopic action
export const { addTopic } = topicsSlice.actions

export default topicsSlice.reducer