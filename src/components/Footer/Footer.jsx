import {Typography} from '@mui/material'
import s from './Footer.module.scss'

const Footer = (props) => {
	return (
		<div className={s.footer}>
			<div className={s.footer__container}>
				<div className={s.footer__text}>
					<Typography variant="body1" component="div">2022. Ilya Yurov.</Typography>
				</div>
			</div>
		</div>
	)
}

export default Footer