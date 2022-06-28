import { useEffect, useState } from 'react';
import Header from './containers/Header';
import Stays from './containers/Stays';
import './App.css';

function App() {
	const [filterResults, getResults] = useState([]);

	useEffect(() => {
		fetch('./stayData.json')
			.then((response) => response.json())
			.then(results => getResults(results))
			.catch(err => console.log(err));
			console.log(filterResults)
	}, []);

	return (
		<div className="App">
			<Header></Header>
			<Stays staysList={filterResults}></Stays>
		</div>
	);
}

export default App;
