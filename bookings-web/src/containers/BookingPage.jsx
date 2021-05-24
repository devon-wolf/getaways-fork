import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BookingForm from '../components/bookings/BookingForm';
import Place from '../components/places/Place';
import { getPlaceByID } from '../services/placesApi';

const submitBooking = e => {
	e.preventDefault();
	console.log('BOOKED');
}

const BookingPage = ({ match }) => {
	const [place, setPlace] = useState({});
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');

	useEffect(() => {
		getPlaceByID(match.params.id)
			.then(setPlace);
	}, []);

	return (
		<div>
			<Place {...place} />
			<BookingForm
				handleStartDate={e => setStartDate(e.target.value)}
				handleEndDate={e => setEndDate(e.target.value)}
				handleBookingSubmit={submitBooking}
				startDateValue={startDate}
				endDateValue={endDate}
			/>
		</div>
	);
}

BookingPage.propTypes = {

};

export default BookingPage;

