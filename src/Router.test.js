import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from './components/Navbar/Navbar'
import {renderWithRouter} from './utils/helpers'
import {Provider} from 'react-redux'
import {createStoreCopy} from './redux/redux-store'

describe('Social network routing tests', () => {
	test('Redirect to login page when user click the button on startpage.', async () => {

		render(<Provider store={store}>{renderWithRouter(<Navbar />, '/')}</Provider>)

		//? Link definition
		const loginLink = screen.getByTestId('login-link')

		expect(screen.getByTestId('start-page')).toBeInTheDocument()
		userEvent.click(loginLink)
		expect(screen.getByTestId('login-page')).toBeInTheDocument()
	})
})