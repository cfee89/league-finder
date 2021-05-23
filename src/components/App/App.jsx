import './App.css';
import background from "../../img/EmbiidSlam.image.jpg";
import LeagueForm from '../LeagueForm/LeagueForm.jsx'
import FindSponsorForm from '../FindSponsorForm/FindSponsorForm.jsx'

const handleChange = val => {
  
};

function App() {
  return (
  <div className = "App" style={{ backgroundImage: `url(${background})`,
                                  backgroundSize: 'auto 100%',
                                  backgroundRepeat: 'repeat',
                                  backgroundPosition: 'left top'}}>
    <div className='container' >
      <div className='row center'>
        <h1 className='white-text'> League Finder </h1>
      </div>
      <div className='row'>
        <div className='col s6'>
          <LeagueForm change={handleChange} />
        </div>
        <div className='col s6'>
          <FindSponsorForm change={handleChange} />
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
