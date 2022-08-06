import React from 'react'
import s from './MusicPage.module.scss'

const MusicPage = () => {
	return (
		<div className={s.musicPage} data-testid='music-page'>
			<h1 className={s.musicPage__header}>
				MUSIC PAGE
			</h1>
		</div>
	)
}

export default MusicPage