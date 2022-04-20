import s from './Description.module.scss'


const Description = () => {
	return (
		<div className={s.content__description}>
			<p>Dmitry K.</p>
			<p>Date of Birth: 2 january</p>
			<p>City: Minsk</p>
			<p>Education: BSU'11</p>
			<p>Web Site: https://it-kamasutra.com</p>
		</div>
	);
}

export default Description;