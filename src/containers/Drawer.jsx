import { useState } from 'react';
import './Drawer.css';

const Drawer = ({ drawerToggle, drawerFlag, updateCity, searchCity, updateGuests, guestInputError }) => {
	return (
		<div
			className={
				drawerFlag
					? 'drawer-container flex flex-column'
					: 'drawer-container--hidden'
			}
		>
			<div className="drawer-content ph3 pv2 flex flex-column justify-between shadow-5">
				<div className="flex flex-column items-center">
					<div className="flex justify-between items-center w-100">
						<p className="f6 fw5">Edit your search</p>
						<button className="clearBtn pointer" onClick={drawerToggle}>
							<span className="material-icons">close</span>
						</button>
					</div>
					<div className="input-container flex flex-column w-100 br4 shadow-4">
						<div className="ph4 pt2 pb1">
							<p className="ma0 pv1 input-helpertext f7 fw5">LOCATION</p>
							<p className="mv1 fw3">
								{searchCity === '' ? 'Finland'	: searchCity + ', Finland'}
							</p>
						</div>
						<form className="ph4 pv2 bt bgray">
							<label htmlFor="guests" className="input-helpertext pv1 f7 fw5 flex">
								<p className='ma0'>GUESTS</p>
								{guestInputError ? 
								<p className='ma0 danger ml3'>Must be a number</p> : null}
							</label>
							<input
								id="guests"
								className="input-reset fw3 w-100 bnone pointer"
								type="text"
								aria-describedby="name-desc"
								placeholder="Add guests"
								onChange={updateGuests}
							></input>
						</form>
					</div>
					<div id="drawer-locations" className="flex flex-column w-90 pv3 ph2">
						<div className="flex items-center">
							<span className="material-icons">location_on</span>
							<p className="pl1 fw3 pointer" onClick={()=> updateCity('Helsinki')}>Helsinki, Finland</p>
						</div>
						<div className="flex items-center">
							<span className="material-icons">location_on</span>
							<p className="pl1 fw3 pointer" onClick={()=> updateCity('Turku')}>Turku, Finland</p>
						</div>
						<div className="flex items-center">
							<span className="material-icons">location_on</span>
							<p className="pl1 fw3 pointer" onClick={()=> updateCity('Oulu')}>Oulu, Finland</p>
						</div>
						<div className="flex items-center">
							<span className="material-icons">location_on</span>
							<p className="pl1 fw3 pointer" onClick={()=> updateCity('Vaasa')}>Vaasa, Finland</p>
						</div>
					</div>
				</div>
				<div className="flex justify-center mb3">
					<button
						className="searchBtn__large br4 flex justify-center items-center pointer"
						onClick={drawerToggle}
					>
						<span
							className="material-icons primcolor pointer"
							onClick={drawerToggle}
						>
							search
						</span>
						<p>Search</p>
					</button>
				</div>
			</div>
			<div className="outFocus" onClick={drawerToggle}></div>
		</div>
	);
};

export default Drawer;
