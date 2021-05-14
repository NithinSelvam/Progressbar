import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actionTypes } from '../../../model/action/actionTypes'
import './ProgressBar.css'

export const ProgressBar = ({ initialProgress, maxSteps }) => {
	const [progress, setProgress] = useState(initialProgress > 0 && initialProgress < maxSteps ? initialProgress : 1)
const dispatch = useDispatch()

	const increaseProgress = () => {
		if (progress < maxSteps) setProgress(progress + 1)
		dispatch(actionTypes.incrementProgress)
	}
	
	const reduceProgress = () => {
		if (progress > 1) setProgress(progress - 1)
		dispatch(actionTypes.decrementProgress)
	}

	return (
		<div className={'progressContainer'}>
			<div id={'reduce'} onClick={reduceProgress} className={'progressSymbol'}>-</div>
			<div id={'progress'} className={'progressBar'}>
				<div style={{ width: 350 * progress/maxSteps }} className={'progress'}></div>
			</div>
			<div id={'increase'} onClick={increaseProgress} className={'progressSymbol'}>+</div>
		</div>
	)
}