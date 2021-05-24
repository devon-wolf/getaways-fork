import React, { useState, useEffect } from 'react';
import Place from '../components/places/Place';
import { getPlaceByID } from '../services/placesApi';

const PlaceDetail = ({ match }) => {
	const [loading, setLoading] = useState(true);
	const [place, setPlace] = useState({});

	useEffect(() => {
		getPlaceByID(match.params.id)
			.then(setPlace)
			.finally(() => setLoading(false));
	}, []);

	return (
		<div>
			{loading ? <p>Loading</p> : <Place {...place} />}
		</div>
	);
};

export default PlaceDetail;