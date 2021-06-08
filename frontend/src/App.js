import { useState } from 'react';
import axios from 'axios';

import { Approval } from './components/Approval';
import { DBController } from './components/DBController';
import { Header } from './components/Header';
import { SavedView } from './components/SavedView';
import { View } from './components/View';

import './App.css';

function App() {

  // Placeholders for state (delete when finished)
  const init_DB = "DB jokes will display here";

  // State variables
  const [ res, setRes ] = useState({id: 'init', value: 'init'});
  const [ jokeFromAPI, getJokeFromAPI ] = useState('Click button for first joke');
  const [ jokeFromDB, getJokeFromDB ] = useState(init_DB);

  // State functions
  const fetchFromAPI = async () => {
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random?category=dev');
      getJokeFromAPI(response.data.value);
      setRes(response.data);
    } catch (error) {
      getJokeFromAPI("Error fetching from API, see console for details.");
      console.log(error);
    }
  }

  const thumbsUp = () => {
    const temp = jokeFromAPI;
    getJokeFromAPI(`data to persist to DB: id: ${res.id}, text: ${res.value}`);
    setTimeout(() => {getJokeFromAPI(temp)}, 5000);
  }

  const thumbsDown = () => {
    const temp = jokeFromAPI;
    getJokeFromAPI(`Joke ID to reject from future API calls: ${res.id}`);
    setTimeout(() => {getJokeFromAPI(temp)}, 5000);
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
      <Approval thumbsUp={thumbsUp}
                thumbsDown={thumbsDown}
      />
      <SavedView jokeFromDB={jokeFromDB} />
      <DBController fetchFromDB={fetchFromDB}
                    updateFromDB={updateFromDB}
                    deleteFromDB={deleteFromDB}
      />
    </div>
  );
}

export default App;
