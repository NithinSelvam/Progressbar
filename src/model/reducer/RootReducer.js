import { combineReducers } from 'redux'
import ProgressReducer from './ProgressReducer'

export const RootReducer = combineReducers({
	currentProgress: ProgressReducer
})