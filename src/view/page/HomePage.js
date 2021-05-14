import React from 'react'
import { ProgressBar } from '../component/progress-bar/ProgressBar'

export const HomePage = () => {
	return (
		<div>
			<h1>Welcome</h1>
			<ProgressBar{...{ initialProgress: 1, maxSteps: 5 }} />
		</div>
	)
}