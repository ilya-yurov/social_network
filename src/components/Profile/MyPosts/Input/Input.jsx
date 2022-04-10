import s from './Input.module.scss'


const Input = () => {
	return (
		<div className={s.content}>
			<div className={s.content__formInput}>
				<textarea placeholder='your news...'></textarea>
			</div>
			<div className={s.content__formButton}>
				<button>Send</button>
			</div>
		</div>
	);
}

export default Input;