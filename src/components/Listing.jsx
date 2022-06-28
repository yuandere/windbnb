import React from 'react';
import './Listing.css';

const Listing = ({
	city,
	country,
	title,
	superHost,
	rating,
	maxGuests,
	type,
	beds,
	photo,
}) => {
	return (
		<div className="stay-container flex flex-column mb3">
			<img className="br4" src={photo}></img>
			<div className="stay-bottom flex flex-column">
				<div className="stay-data flex justify-between items-center">
					<div className="stay-data-left flex items-center">
						{superHost ? (
							<div className="superhost ba br4 pv1 ph2 mr2 f7 b">SUPER HOST</div>
						) : null}
						<p className="f6 mr1 fgray">{type}</p>
						{beds ? (
							<p className="f6 fgray">{beds === 1 ? '• 1 bed' : '• ' + beds + ' beds'}</p>
						) : null}
					</div>
					<div className="stay-data-right flex items-center">
						<span className="material-icons primcolor">star</span>
						<p className="f6">{rating}</p>
					</div>
				</div>
				<p className="stay-desc fw5 f55 mt0">{title}</p>
			</div>
		</div>
	);
};

export default Listing;
