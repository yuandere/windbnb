import { useState } from 'react';
import './Header.css';

const Header = ({ drawerOpen }) => {
	return (
		<div className="block flex flex-column">
			<div className="logo">
				<img src="logo.svg"></img>
			</div>
			<div className="search-container mt4 flex justify-around items-center w-80 br4 shadow-4">
				<div className="location pa2 f6 tc h-100 flex items-center">
					Helsinki, Finland
				</div>
				<form className="pv3 pl2 f6 flex items-center bl bgray w-33">
						<input
							id="name"
							className="input-reset w-100 tc bnone"
							type="text"
							aria-describedby="name-desc"
							placeholder='Add guests'
						></input>
				</form>

				<button className="searchBtn bl bgray pa2 h-100 flex items-center">
					<span className="material-icons">search</span>
				</button>
			</div>
		</div>
	);
};

export default Header;
