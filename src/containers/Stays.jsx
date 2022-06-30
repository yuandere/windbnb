import { useState } from 'react';
import Listing from '../components/Listing';
import { v1 as uuidv1 } from 'uuid';

const Stays = ({ staysList, searchCity, searchGuests }) => {
	let newStays = staysList;
	if (searchCity != '') {
		newStays = newStays.filter(stay=> stay.city === searchCity)
	};
	if (searchGuests > 0) {
		newStays = newStays.filter(stay=> stay.maxGuests >= searchGuests);
	};
	
	if (newStays.length === 0) {
		return (
			<div className="ma3">
				<div className="flex justify-between items-center">
				<h4 className='mt5 ml3'>No stays found. Please try a different search.</h4>
				</div>
			</div>
		)
	};
	return (
		<div className="ma3">
			<div className="flex justify-between items-center">
				<p className="f4 b">Stays in Finland</p>
				<p className="f6">{newStays.length} stays</p>
			</div>
			<div>
				{newStays.map((item, i) => {
					return (
						<Listing
							key={uuidv1()}
							city={newStays[i].city}
							country={newStays[i].country}
							superHost={newStays[i].superHost}
							title={newStays[i].title}
							rating={newStays[i].rating}
							maxGuests={newStays[i].maxGuests}
							type={newStays[i].type}
							beds={newStays[i].beds}
							photo={newStays[i].photo}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Stays;
