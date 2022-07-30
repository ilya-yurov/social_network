import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Routes } from 'react-router-dom';
import Users from './Users';

describe('Users component test', () => {
	let response, filter;
	beforeAll(() => {
		response = {
			items: [
				{
					"name": "Bula2",
					"id": 24892,
					"uniqueUrlName": null,
					"photos": {
						"small": null,
						"large": null
					},
					"status": null,
					"followed": false
				},
				{
					"name": "Valera_Radionov",
					"id": 24891,
					"uniqueUrlName": null,
					"photos": {
						"small": null,
						"large": null
					},
					"status": null,
					"followed": false
				},
				{
					"name": "diana-boiba",
					"id": 24890,
					"uniqueUrlName": null,
					"photos": {
						"small": null,
						"large": null
					},
					"status": null,
					"followed": false
				}
			]
		},
		filter = {
			term: '',
			status: null
		}
	})

	test('The Users component is being rendered', () => {
		render(
			<MemoryRouter>
				<Users users={response.items} filter={filter}/>
			</MemoryRouter>
		);
		const usersSearchForm = screen.getByText(/find your friend/i);
		expect(usersSearchForm).toBeInTheDocument();
	});

	test('The number of Users elements is 3', () => {
		render(
			<MemoryRouter>
				<Users users={response.items} filter={filter}/>
			</MemoryRouter>
		);
		screen.debug();
		const usersElements = screen.getAllByTestId('user-element');
		expect(usersElements.length).toBe(3);
	})
})