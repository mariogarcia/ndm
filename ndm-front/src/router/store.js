import { appReducers } from '../reducers'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

/**
 * History used in app
 *
 * @since 0.1.0
 */
export const history = createHistory()

/**
 * App store
 *
 * @since 0.1.0
 */
export const store = createStore(
    appReducers,
    applyMiddleware(routerMiddleware(history))
)
