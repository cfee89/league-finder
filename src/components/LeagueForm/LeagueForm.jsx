import React, { useState } from 'react';
import '../App/App.css';

const initialValues = {
	leagueName: '',
    price: 0,
	lat: 0,
	long: 0}

const LeagueForm = ({ change }) => {
	const [state, setState] = useState(initialValues);

	const handleChange = event => {
        const value = event.target.value;
		setState({
			...state,
            [event.target.name]: value
		});
    }
	const handleSubmit = () => {
		console.log(JSON.stringify(state));
		fetch('http://localhost:4000/league-finder/add-league', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(state),
		headers: {
			'Content-Type': 'application/json'
		}
		
      }).then(function(response) {
        const jsonResponse =  response.json();
		console.log(jsonResponse);
        return jsonResponse;
      });
		setState(initialValues);
	};

	return (
		<>
			<div className="row">
				<div className="col m6 s12">
					<label htmlFor="leagueName"> Name: </label>
					<input
                        id="leagueName"	
						name="leagueName"
						type="text"
						placeholder="Enter League Name"
						value={state.leagueName}
						onChange={handleChange}
					/>
				</div>
            </div>
            <div className="row">
				<div className="col m6 s12">
					<label htmlFor="price">Price: </label>
					<input
                        id="price"
						name="price"
						type="number"
						value={state.price}
						onChange={handleChange}
					/>
				</div>
            </div>
			<div className="row">
				<div className="col m6 s12">
					<label htmlFor="lat">Latitude: </label>
					<input
                        id="lat"
						name="lat"
						type="number"
						value={state.lat}
						onChange={handleChange}
					/>
				</div>
            </div>
			<div className="row">
				<div className="col m6 s12">
					<label htmlFor="long">Longitude: </label>
					<input
                        id="long"
						name="long"
						type="number"
						value={state.long}
						onChange={handleChange}
					/>
				</div>
            </div>
			<div className="center">
				<button
					id="add-league-btn"
					className="all-the-btn"
					type="button"
					disabled={state.leagueName === '' || state.price === '' || state.lat === '' || state.long === ''}
					onClick={handleSubmit}
				>
					Add League
				</button>
			</div>
		</>
	);
};

export default LeagueForm;