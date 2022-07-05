import sT from './FormsContolsTextarea.module.scss'
import sI from './FormsContolsInput.module.scss'

const FormControl = ({ meta, buttonText, children, formName }) => {
	const hasError = meta.touched && meta.error;
	const isTextarea = formName === 'Textarea';
	const isInput = formName === 'Input';
	return (
		<div className={(isTextarea && sT.content) || (isInput && sI.content)}>
			{hasError ?
				<div className={(isTextarea && sT.content__formTextarea_error) || (isInput && sI.content__formInput_error)}>
					{children}
				</div>
				:
				<div className={(isTextarea && sT.content__formTextarea) || (isInput && sI.content__formInput)}>
					{children}
				</div>
			}
			{isTextarea &&
				<div className={hasError ? sT.content__formButton_error : sT.content__formButton}>
					<button>{buttonText}</button>
				</div>}
			{hasError && <div className={(isTextarea && sT.content__formError) || (isInput && sI.content__formError)}>{meta.error}</div>}
		</div>
	)
}

export const Textarea = (props) => {
	const { meta, input, child, buttonText, ...restProps } = props;
	return <FormControl formName='Textarea' {...props}><textarea {...input} {...restProps} /></FormControl>
}
export const Input = (props) => {
	const { meta, input, child, buttonText, ...restProps } = props;
	return <FormControl formName='Input' {...props}><input {...input} {...restProps} /></FormControl>
}
