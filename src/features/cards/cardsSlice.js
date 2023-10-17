import { createSlice } from '@reduxjs/toolkit'

// [Step 14] Has initial state consisting of an object that includes one property, cards, which corresponds to an empty object. This inner cards object will eventually hold all cards keyed by id.
const initialState = {
    cards: {}
}

const sliceOptions = {
    name: "cards",
    initialState: initialState,
    reducers: {
        // [Step 14] Has an addCard action. This action will receive a payload of the form { id: '123', front: 'front of card', back: 'back of card'}.
        addCard: (state, action) => {
            return {
                ...state,
                cards: {
                    ...state.cards,
                    [action.payload.id]: {
                        id: action.payload.id,
                        front: action.payload.front,
                        back: action.payload.back
                    }
                }
            }
        }
    }
}

// [Step 14] Is added to the store.
export const cardsSlice = createSlice(sliceOptions)

// [Step 14] Has a selector that returns a card with the given id
export const selectCardsById = (selectedId) => (state) => {

    return Object
        .keys(state.cards.cards)
        .filter(key => key === selectedId)
        .reduce((obj, key) => {
            obj[key] = state.cards.cards[key]
            return obj
        }, {})
}

export const { addCard } = cardsSlice.actions
export default cardsSlice.reducer