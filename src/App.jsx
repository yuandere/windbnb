import { useEffect, useState } from 'react';
import Header from './containers/Header';
import Stays from './containers/Stays';
import Drawer from './containers/Drawer';
import './App.css';

function App() {
	const [initStays, setResults] = useState([]);
	const [filteredStays, setStays] = useState([]);
	const [drawerFlag, flagDrawer] = useState(false);
	const [searchCity, setCity] = useState('');
	const [searchGuests, setGuests] = useState(0);
	const [guestInputError, setGIE] = useState(false);
	const [staysFlag, flagStays] = useState(false);
	const [breakpoint, setBreakpoint] = useState('');
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	const handleResize = () => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		handleResize();
		if (0 < windowSize.width && windowSize.width < 860) {
			setBreakpoint('sm');
		}
		if (860 < windowSize.width && windowSize.width < 1280) {
			setBreakpoint('md');
		}
		if (1280 <= windowSize.width) {
			setBreakpoint('lg');
		}
		return () => window.removeEventListener('resize', handleResize);
	}, [windowSize.width]);

	useEffect(() => {
		fetch('./stayData.json')
			.then((response) => response.json())
			.then((results) => {
				setResults(results);
				setStays(results)
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(()=> {
		if (searchCity === '') {
			setStays(initStays.filter((stay) => stay.maxGuests >= searchGuests));
		}
		else {
			setStays(initStays.filter((stay) => stay.city === searchCity && stay.maxGuests >= searchGuests))
		};
		return ()=> flagStays(false);
	}, [staysFlag]);

	const drawerToggle = () => {
		if (drawerFlag === false) {
			flagDrawer(true);
			document.getElementById('root').scrollIntoView();
			document.querySelector('body').classList.add('scroll-lock');
		} else {
			flagDrawer(false);
			document.querySelector('body').classList.remove('scroll-lock');
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
		} else {
			setGIE(true);
		}
	};

	return (
		<div
			className={
				breakpoint === 'sm'
					? 'App'
					: breakpoint === 'md'
					? 'App App-width-md mh5 mv3'
					: 'App App-width-lg mh5 mv3'
			}
		>
			<Drawer
				drawerToggle={drawerToggle}
				drawerFlag={drawerFlag}
				updateCity={updateCity}
				searchCity={searchCity}
				updateGuests={updateGuests}
				searchGuests={searchGuests}
				setGuests={setGuests}
				guestInputError={guestInputError}
				flagStays={flagStays}
				breakpoint={breakpoint}
			></Drawer>
			{breakpoint === 'sm' ? (
				<>
					<div className="pa3">
						<img src="logo.svg"></img>
					</div>
					<Header
						drawerToggle={drawerToggle}
						searchCity={searchCity}
						searchGuests={searchGuests}
					></Header>
				</>
			) : (
				<div className="flex justify-between items-center">
					<div className="pa3">
						<img src="logo.svg"></img>
					</div>
					<Header
						drawerToggle={drawerToggle}
						searchCity={searchCity}
						searchGuests={searchGuests}
					></Header>
				</div>
			)}
			<Stays
				staysList={filteredStays}
				searchCity={searchCity}
				searchGuests={searchGuests}
				breakpoint={breakpoint}
			></Stays>
			<p className='gray tc f6 mt5'>
				created by <span className='b underline'>@yuandere</span> - devChallenges.io
			</p>
		</div>
	);
}

export default App;
