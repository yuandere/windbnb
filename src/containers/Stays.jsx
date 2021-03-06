import Listing from '../components/Listing';
import { v1 as uuidv1 } from 'uuid';
import './Stays.css';

const Stays = ({
	staysList,
	breakpoint
}) => {
	if (staysList.length === 0) {
		return (
			<div className="ma3">
				<div className="flex justify-between items-center">
					<h4 className="mt5 ml3" style={{height: "60vh"}}>
						No stays found. Please try a different search.
					</h4>
				</div>
			</div>
		);
	}
	return (
		<div className="ma3">
			<div className="flex justify-between items-center">
				<p className="f4 b">Stays in Finland</p>
				<p className="f6">{staysList.length} stays</p>
			</div>
			<div
				className={
					breakpoint === 'sm'
						? null
						: breakpoint === 'md'
						? 'stays-width-md'
						: 'stays-width-lg'
				}
			>
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
							beds={staysList[i].beds}
							photo={staysList[i].photo}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Stays;
