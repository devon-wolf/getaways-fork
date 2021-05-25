import React from 'react'
import PropTypes from 'prop-types'

const BookingForm = ({ handleStartDate, handleEndDate, handleBookingSubmit, startDateValue, endDateValue, calculatedPrice }) => {
	return (
		<form onSubmit={handleBookingSubmit}>
			<label>
			Start Date
				<input
					type="date"
					value={startDateValue}
					onInput={handleStartDate}
				/>
			</label>

			<label>
			End Date
				<input
					type="date"
					value={endDateValue}
					onInput={handleEndDate}
				/>
			</label>

			<label>
				Price
				<span>
					{calculatedPrice}
				</span>
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
	endDateValue: PropTypes.string.isRequired,
	calculatedPrice: PropTypes.number.isRequired
}

export default BookingForm;

