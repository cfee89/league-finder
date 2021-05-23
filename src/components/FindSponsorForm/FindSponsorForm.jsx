import {useState} from 'react';
import '../App/App.css';

const initialValues = {
	budget: 0,
	lat: 0,
	long: 0,
    radius: 0}

const FindSponsorForm = () => {
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
		fetch('http://localhost:4000/league-finder/find-league', {
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
		<div>
			<div className="row">
				<div className="col s6">
					<label htmlFor="budget"> Budget: </label>
					<input
                        id="budget"	
						name="budget"
						type="number"
						placeholder="How much ya willing to spend?"
						value={state.budget}
						onChange={handleChange}
					/>
				</div>
            </div>
			<div className="row">
				<div className="col s6">
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
				<div className="col s6">
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
            <div className="row">
				<div className="col s6">
					<label htmlFor="radius">Distance (mi): </label>
					<input
                        id="radius"
						name="radius"
						type="number"
						value={state.radius}
						onChange={handleChange}
					/>
				</div>
            </div>
			<div className="center">
				<button
					id="find-leagues-btn"
					className="all-the-btn"
					type="button"
					disabled={state.budget === 0 || state.lat === 0 || state.long === 0}
					onClick={handleSubmit}
				>
					Find Leagues
				</button>
			</div>
		</div>
	);
};



export default FindSponsorForm;