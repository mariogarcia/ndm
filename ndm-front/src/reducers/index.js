import { Country } from '../services/Country'
import { combineReducers } from 'redux'

const actions = (state = [], action) => {
    console.log(action)

    switch (action.type) {
    case 'COUNTRY_DETAIL':
        return [
            ...state,
            {
                country: {
                    name: 'Spain'
                }
            }
        ]
    case 'COUNTRY_DELETE':
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
