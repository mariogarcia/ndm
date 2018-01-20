import { combineReducers } from 'redux'
import { Country } from '../services/Country'
import { actionTypes } from '../actions'

const actions = (state = {}, action) => {
    console.log(action)

    switch (action.type) {

    case actionTypes.DETAIL_REQUEST:
        return Country.findById(action.id)

    default:
        return state
    }
}

export const appReducers = combineReducers({
    actions
})

export default appReducers
