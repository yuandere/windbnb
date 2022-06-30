import { useEffect, useState } from 'react';
import Header from './containers/Header';
import Stays from './containers/Stays';
import Drawer from './containers/Drawer';
import './App.css';

function App() {
	const [filterResults, getResults] = useState([]);
	const [drawerFlag, setDrawer] = useState(false);
	const [searchCity, setCity] = useState('');
	const [searchGuests, setGuests] = useState(0);
	const [guestInputError, setGIE] = useState(false);

	useEffect(() => {
		fetch('./stayData.json')
			.then((response) => response.json())
			.then((results) => getResults(results))
			.catch((err) => console.log(err));
		console.log('use effected');
	}, [searchCity. searchGuests]);

	const drawerToggle = () => {
		if (drawerFlag === false) {
			setDrawer(true);
			document.getElementById('root').scrollIntoView();
			document.querySelector('body').classList.add('scroll-lock');
			console.log('drawer toggled', drawerFlag);
		} else {
			setDrawer(false);
			document.querySelector('body').classList.remove('scroll-lock');
			console.log('drawer toggled', drawerFlag);
		}
	};

	const updateCity = (city) => {
		setCity(city);
	};

	const updateGuests = (event) => {
		const guest = Number(event.target.value);
		if (!isNaN(guest)) {
			setGuests(guest);
			setGIE(false);
		}	else {
			setGIE(true);
		}
	};

	return (
		<div className="App">
			<Drawer
				drawerToggle={drawerToggle}
				drawerFlag={drawerFlag}
				updateCity={updateCity}
				searchCity={searchCity}
				updateGuests={updateGuests}
				guestInputError={guestInputError}
			></Drawer>
			<div className="pa3">
				<img src="logo.svg"></img>
			</div>
			<Header
				drawerToggle={drawerToggle}
				searchCity={searchCity}
				searchGuests={searchGuests}
			></Header>
			<Stays 
				staysList={filterResults}
				searchCity={searchCity}
				searchGuests={searchGuests}
				></Stays>
		</div>
	);
}

export default App;
