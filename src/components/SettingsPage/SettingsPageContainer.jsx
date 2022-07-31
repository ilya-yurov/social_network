import React from 'react'
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import SettingsPage from './SettingsPage';

const SettingsPageContainer = () => {
	return (
		<div>
			<SettingsPage/>
		</div>
	);
};

export default withAuthRedirect(SettingsPageContainer);