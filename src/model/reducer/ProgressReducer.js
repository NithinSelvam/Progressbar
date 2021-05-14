import { DECREMENT_PROGRESS, INCREMENT_PROGRESS } from "../action/actions";

export const ProgressReducer = (currentProgress = { progress: 1 }, { type='' })  => {
	const { progress } = currentProgress
	switch(type) {
		case INCREMENT_PROGRESS:
			return Object.assign(currentProgress, { progress: progress + 1 } )
		case DECREMENT_PROGRESS:
			return Object.assign(currentProgress, { progress: progress - 1 } )
		default: return currentProgress
	}
}

export default ProgressReducer