import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './components/Navbar/Navbar';
import { renderWithRouter } from './utils/helpers';
import { Provider } from 'react-redux';

describe('Social network routing tests', () => {
	test('Redirect to login page when try to get profile.', async () => {

		render(<Provider store={store}>{renderWithRouter(<Navbar />, '/')}</Provider>);

		//? Link definition
		const profileLink = screen.getByTestId('profile-link');

		expect(screen.getByTestId('start-page')).toBeInTheDocument();
		userEvent.click(profileLink);
		expect(screen.getByTestId('login-page')).toBeInTheDocument();
	});
})