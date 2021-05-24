import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
import Getaways from './Getaways';

// const server = setupServer(
// 	rest.get('')
// )

describe('Getaways page', () => {
	it('Renders the getaways page', () => {
		render(
		<MemoryRouter>
			<Getaways />
		</MemoryRouter>
		);

		screen.getByText('Loading');

		// return waitFor(() => {
		// 	const placeList = screen.getByLabelText('place-list');
		// 	expect(placeList).not.toBeEmptyDOMElement();
		// 	expect(placeList).toMatchSnapshot();
		// });
	});
})