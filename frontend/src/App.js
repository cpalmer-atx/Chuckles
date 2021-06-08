import { useState } from 'react';
import axios from 'axios';

import { Approval } from './components/Approval';
import { DBController } from './components/DBController';
import { Header } from './components/Header';
import { SavedView } from './components/SavedView';
import { View } from './components/View';

import './App.css';

function App() {

  // Placeholders for state
  const init_DB = "DB jokes will display here";
  let curr = {
    data: { value: 'Click button for first joke' }
  }

  // State variables
  const [ jokeFromAPI, getJokeFromAPI ] = useState(curr.data.value);
  const [ jokeFromDB, getJokeFromDB ] = useState(init_DB);

  // State functions
  const fetchFromAPI = async () => {
    try {
      const res = await axios.get('https://api.chucknorris.io/jokes/random?category=dev');
      curr = res.data;
      getJokeFromAPI(curr.value);
    } catch (error) {
      getJokeFromAPI("Error fetching from API, see console for details.");
      console.log(error);
    }
  }

  const thumbsPlaceholder = () => {
    getJokeFromAPI("Thumbs up/down clicked!");
    setTimeout(() => {getJokeFromAPI(jokeFromAPI)}, 1000);
  }

  const fetchFromDB = () => {
    getJokeFromDB("'GET' clicked!");
    setTimeout(() => {getJokeFromDB(init_DB)}, 1000);
  }

  const updateFromDB = () => {
    getJokeFromDB("'UPDATE' clicked!");
    setTimeout(() => {getJokeFromDB(init_DB)}, 1000);
  }

  const deleteFromDB = () => {
    getJokeFromDB("'DELETE' clicked!");
    setTimeout(() => {getJokeFromDB(init_DB)}, 1000);
  }


  return (
    <div className="container">
      <Header />
      <View jokeFromAPI={jokeFromAPI} 
            fetchFromAPI={fetchFromAPI}
      />
      <Approval thumbsPlaceholder={thumbsPlaceholder} />
      <SavedView jokeFromDB={jokeFromDB} />
      <DBController fetchFromDB={fetchFromDB}
                    updateFromDB={updateFromDB}
                    deleteFromDB={deleteFromDB}
      />
    </div>
  );
}

export default App;
