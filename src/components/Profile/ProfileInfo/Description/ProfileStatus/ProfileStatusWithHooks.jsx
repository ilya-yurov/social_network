import React, { useState } from 'react';
import s from './ProfileStatus.module.scss'

const ProfileStatusWithHooks = (props) => {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	const activateEditMode = () => {
		setEditMode(true);
	}

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	}

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)

	}

	return (
	<div className={s.status}>
		{!editMode &&
			<div className={s.status__data}>
				<span className={s.status__header}>Status: </span>
				<span onDoubleClick={activateEditMode} >{props.status || "Enter your status here."}</span>
			</div>
		}
		{editMode &&
			<div className={s.status__input}>
				<span className={s.status__header}>Status: </span>
				<input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
			</div>
		}
	</div>
)}

export default ProfileStatusWithHooks;