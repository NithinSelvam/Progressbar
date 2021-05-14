import { all, fork } from 'redux-saga/effects'

export function* RootSaga() {
	yield all([
		fork(),
		fork()
	])
}