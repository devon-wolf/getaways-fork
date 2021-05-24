import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Getaways from './Getaways';

describe('Getaways page', () => {
	it('Renders the getaways page', () => {
		render(<Getaways />);
		screen.getByText('Loading');
		const placeList = screen.findByRole('list');
	});
})