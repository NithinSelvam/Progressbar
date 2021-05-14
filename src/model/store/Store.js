import { RootReducer } from "../reducer/RootReducer"
import { createStore, applyMiddleware } from 'redux'
import saga from 'redux-saga'

const sagaMiddleware = saga()

export const getStore = () => {
	const store = createStore(
	RootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
	window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(sagaMiddleware)))

	sagaMiddleware.run()
}

