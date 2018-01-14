import { combineReducers } from 'redux'

export const actionTypes = {
    DETAIL: "@ndm/UI/countries/DETAIL",
    DELETE: "@ndm/UI/countries/DELETE"
}

const actions = (state = [], action) => {
    console.log(action)

    switch (action.type) {
    case actionTypes.DETAIL:
        return [
            ...state,
            {
                country: {
                    name: 'Spain'
                }
            }
        ]
    case actionTypes.DELETE:
        return [
            ...state,
            {

            }
        ]
    default:
        return state
    }
}

export const appReducers = combineReducers({
    actions
})

export default appReducers
