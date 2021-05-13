import { useState, useEffect } from 'react';
import Chuck from './img/chuck.png';

const API_URL = 'https://api.icndb.com/jokes/random';

function App() {
  const [joke, setJoke] = useState('');

  const getJoke = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setJoke(data.value.joke));
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className="box">
      <div className="box-header">
        <img src={Chuck} alt="" />
        <h1>Chuck Norris Joke Generator</h1>
      </div>
      <p dangerouslySetInnerHTML={{ __html: joke }}></p>
      <button onClick={getJoke}>Get new joke 😂</button>
    </div>
  );
}

export default App;
