import sT from './FormsContolsTextarea.module.scss'
import sI from './FormsContolsInput.module.scss'

const FormControl = ({meta, input, buttonText, ...props}) => {
	const hasError = meta.touched && meta.error;
	const isTextarea = props.formName === 'Textarea';
	const isInput =  props.formName === 'Input';
	return (
			<div className={(isTextarea && sT.content) || (isInput && sI.content)}>
				{hasError ?
					<div className={(isTextarea && sT.content__formTextarea_error) || (isInput && sI.content__formInput_error)}>
						{props.children}
					</div>
					:
					<div className={(isTextarea && sT.content__formTextarea) || (isInput && sI.content__formInput)}>
						{props.children}
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
	const {meta, input, child, buttonText, ...restProps} = props;
	return <FormControl  formName='Textarea' {...props}><textarea {...input} {...restProps}/></FormControl>
}
export const Input = (props) => {
	const {meta, input, child, buttonText, ...restProps} = props;
	return <FormControl formName='Input' {...props}><input {...input} {...restProps}/></FormControl>
}
