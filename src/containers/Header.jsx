import { useState } from 'react';
import './Header.css';

const Header = ({ drawerToggle, searchCity, searchGuests }) => {
	return (
		<div className="block flex flex-column">
			<div className="search-container mt3 flex justify-around items-center w-80 br4 shadow-4 pointer" onClick={drawerToggle}>
				<div className="location pa2 f6 tc h-100 flex items-center">
					<p>
						{searchCity === '' ? 'Finland'	: searchCity + ', Finland'}
					</p>
				</div>
				<form className="pv3 pl2 f6 flex items-center bl bgray w-33">
						<input
							id="guests"
							className="input-reset w-100 tc bnone"
							type="text"
							aria-describedby="name-desc"
							placeholder={searchGuests ? 
								(searchGuests === 1 ? '1 guest' : searchGuests + ' guests') 
								: 'Add guests'}
						></input>
				</form>
				<button className="searchBtn bl bgray pa2 h-100 flex items-center">
					<span className="material-icons primcolor pointer" onClick={drawerToggle}>search</span>
				</button>
			</div>
		</div>
	);
};

export default Header;
