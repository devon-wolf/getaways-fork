import React from 'react'
import PropTypes from 'prop-types'

const BookingForm = ({ handleStartDate, handleEndDate, handleBookingSubmit, startDateValue, endDateValue }) => {
	return (
		<form onSubmit={handleBookingSubmit}>
			<label>
				<input
					type="date"
					value={startDateValue}
					onInput={handleStartDate}
				/>
				Start Date
			</label>
			<label>
				<input
					type="date"
					value={endDateValue}
					onInput={handleEndDate}
				/>
				End Date
			</label>
			<button>Submit</button>
		</form>
	);
}

BookingForm.propTypes = {
	handleStartDate: PropTypes.func.isRequired,
	handleEndDate: PropTypes.func.isRequired,
	handleBookingSubmit: PropTypes.func.isRequired,
	startDateValue: PropTypes.string.isRequired,
	endDateValue: PropTypes.string.isRequired
}

export default BookingForm;

