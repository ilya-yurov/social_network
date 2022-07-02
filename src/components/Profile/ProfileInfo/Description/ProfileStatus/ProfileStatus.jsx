import React from 'react';
import s from './ProfileStatus.module.scss'

class ProfileStatus extends React.Component {

	componentDidUpdate = (prevProps, prevState) => {
		if (prevProps.status != this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}


	state = {
		editMode: false,
		status: this.props.status
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}
	deactivateEditMode = () => {
		this.setState({
			editMode: false
		})
		this.props.updateStatus(this.state.status);
	}

	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value
		})
	}

	render() {
		return  <div className={s.status}>
					{!this.state.editMode &&
						<div className={s.status__data}>
							<span className={s.status__header}>Status: </span>
							<span onDoubleClick={this.activateEditMode}>{this.props.status || "Enter your status here."}</span>
						</div>
					}
					{this.state.editMode &&
						<div className={s.status__input}>
							<span className={s.status__header}>Status: </span>
							<input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
						</div>
					}
				</div>
	}
}

export default ProfileStatus;