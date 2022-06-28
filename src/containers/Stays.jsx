import { useState } from 'react';
import Listing from '../components/Listing';
import { v1 as uuidv1 } from 'uuid';

const Stays = ({ staysList }) => {
	console.log(staysList[0]);
	return (
		<div className="ma3">
			<div className="flex justify-between items-center">
				<p className="f4 b">Stays in Finland</p>
				<p className="f6">{staysList.length} stays</p>
			</div>
			<div>
				test
				{staysList.map((item, i) => {
					return (
						<Listing
							key={uuidv1()}
							city={staysList[i].city}
							country={staysList[i].country}
							superHost={staysList[i].superHost}
							title={staysList[i].title}
							rating={staysList[i].rating}
							maxGuests={staysList[i].maxGuests}
							type={staysList[i].type}
							bed={staysList[i].bed}
							photo={staysList[i].photo}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Stays;
