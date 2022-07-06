import { useState } from "react";
import './Counter.css';

const Counter = ({ type, searchGuests, setGuests }) => {
  const [count, setCount] = useState(0);

	return (
		<div className="flex flex-column">
			<p className="ma0">
				{type === 'adult' ? 'Adults' : type === 'child' ? 'Children' : 'placeholder'}
			</p>
      <p className="ma0 lgray">
        {type === 'adult' ? 'Ages 13 or above' : type === 'child' ? 'Ages 2-12' : 'placeholder'}
      </p>
      <div className="flex items-center">
        <button className="counter" onClick={()=> {
          if (count === 0 || searchGuests === 0) {return}
          setCount(count - 1);
          setGuests(searchGuests - 1)}}>-</button>
        <p className="tc" style={{width: "2rem"}}>{count}</p>
        <button className="counter" onClick={()=> {
          if (count === 99 || searchGuests === 99) {return}
          setCount(count + 1);
          setGuests(searchGuests + 1)}}>+</button>
      </div>
		</div>
	);
};

export default Counter;
