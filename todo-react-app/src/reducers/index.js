import {todos} from './todos.reducer'
import visibilityFilter from './visibilityFilter.reducer'
import { combineReducers } from 'redux'

export const currentReducer = combineReducers({
    todos,
    visibilityFilter
})