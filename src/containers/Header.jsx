import { useState } from 'react';
import './Header.css';

const drawerOpen = () => {
	console.log('open')
};

const Header = () => {
	return (
		<div className="block flex flex-column">
			<div className="search-container mt3 flex justify-around items-center w-80 br4 shadow-4">
				<div className="location pa2 f6 tc h-100 flex items-center pointer">
					Helsinki, Finland
				</div>
				<form className="pv3 pl2 f6 flex items-center bl bgray w-33 pointer" onFocus={drawerOpen}>
						<input
							id="name"
							className="input-reset w-100 tc bnone"
							type="text"
							aria-describedby="name-desc"
							placeholder='Add guests'
						></input>
				</form>

				<button className="searchBtn bl bgray pa2 h-100 flex items-center">
					<span className="material-icons primcolor pointer" onClick={drawerOpen}>search</span>
				</button>
			</div>
		</div>
	);
};

export default Header;
