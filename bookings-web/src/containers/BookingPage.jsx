import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BookingForm from '../components/bookings/BookingForm';
import Place from '../components/places/Place';
import { getPlaceByID } from '../services/placesApi';

const BookingPage = ({ match }) => {
	const [loading, setLoading] = useState(true);
	const [place, setPlace] = useState({});
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');

	const calculatePrice = () => {
		const calcStart = new Date(startDate);
		const calcEnd = new Date(endDate);
		const nights = (calcEnd - calcStart) / (24 * 3600 * 1000);
		return nights * place.pricePerNight;
	}

	const getState = () => {
		const splitLocation = place.location.split(',');
		return splitLocation[splitLocation.length - 2];
	}

	const submitBooking = e => {
		e.preventDefault();
		console.log('Start date:', startDate, 'End date:', endDate, 'Price:', calculatePrice(), 'Location:', getState());

		const booking = {
			start_date: new Date(startDate),
			end_date: new Date(endDate),
			state: getState(),
			total_price: calculatePrice(),
			place_id: place.id,
			user_id: match.params.user.id
		};

		// send booking to backend
	}

	useEffect(() => {
		getPlaceByID(match.params.id)
			.then(setPlace)
			.finally(() => setLoading(false));
	}, []);

	return (
		<div>
			{loading ? <p>Loading</p> : <Place {...place} />}
			
			<BookingForm
				handleStartDate={e => setStartDate(e.target.value)}
				handleEndDate={e => setEndDate(e.target.value)}
				handleBookingSubmit={submitBooking}
				startDateValue={startDate}
				endDateValue={endDate}
				calculatedPrice={calculatePrice() || 0}
			/>
		</div>
	);
}

BookingPage.propTypes = {

};

export default BookingPage;

