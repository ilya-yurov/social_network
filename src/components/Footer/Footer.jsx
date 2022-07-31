import s from './Footer.module.scss'

const Footer = (props) => {
	return (
		<div className={s.footer}>
			<div className={s.footer__container}>
				<div className={s.footer__text}>
					2022. Ilya Yurov.
				</div>
			</div>
		</div>
	)
}

export default Footer;