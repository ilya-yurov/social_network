import React, {useEffect, useState} from 'react'
import s from './ProfileStatus.module.scss'

const ProfileStatus = ({isAuth, status, updateStatus, currentUserId}) => {

	let [editMode, setEditMode] = useState(false)
	let [localStatus, setLocalStatus] = useState(status)

	let canUpdateStatus = !currentUserId && isAuth ? true : false
	let statusString = canUpdateStatus ? "Enter your status here." : "No status"

	useEffect(() => {
		setLocalStatus(status)
	}, [status])

	const activateEditMode = () => {
		setEditMode(true)
	}

	const deactivateEditMode = () => {
		setEditMode(false)
		updateStatus(localStatus)
	}

	const onStatusChange = (e) => {
		setLocalStatus(e.currentTarget.value)
	}

	return (
		<div className={s.status}>
			{!editMode &&
				<div className={s.status__data}>
					<span className={s.status__header}>Status: </span>
					<span onDoubleClick={canUpdateStatus ? activateEditMode : null} >{status || statusString}</span>
				</div>
			}
			{editMode &&
				<div className={s.status__input}>
					<span className={s.status__header}>Status: </span>
					<input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={localStatus} />
				</div>
			}
		</div>
	)
}

export default ProfileStatus