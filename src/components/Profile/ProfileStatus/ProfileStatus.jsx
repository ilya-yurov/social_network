import React from 'react';
import s from './ProfileStatus.module.scss'

class ProfileStatus extends React.Component {

	state = {
		editMode: false
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
	}

	render() {
		return  <div className={s.status}>
					{!this.state.editMode &&
						<div className={s.status__data}>
							<span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
						</div>
					}
					{this.state.editMode &&
						<div className={s.status__input}>
							<input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} />
						</div>
					}
				</div>
	}
}

export default ProfileStatus;