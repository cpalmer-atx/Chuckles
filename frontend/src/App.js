import { useState } from 'react';

import { Approval } from './components/Approval';
import { DBController } from './components/DBController';
import { Header } from './components/Header';
import { SavedView } from './components/SavedView';
import { View } from './components/View';

import './App.css';

function App() {

  // Placeholders for state
  const init = "API jokes will display here";

  // State variables
  const [ jokeFromAPI, getJokeFromAPI ] = useState(init);

  // State functions
  const fetchFromAPI = () => {
    getJokeFromAPI("Get new joke clicked!");
    setTimeout(() => {getJokeFromAPI(init)}, 1000);
  }

  const thumbsPlaceholder = () => {
    getJokeFromAPI("Thumbs up/down clicked!");
    setTimeout(() => {getJokeFromAPI(init)}, 1000);
  }

  return (
    <div className="container">
      <Header />
      <View jokeFromAPI={jokeFromAPI} 
            fetchFromAPI={fetchFromAPI}
      />
      <Approval thumbsPlaceholder={thumbsPlaceholder} />
      <SavedView />
      <DBController />
    </div>
  );
}

export default App;
