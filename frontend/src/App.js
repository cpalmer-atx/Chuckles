import { Approval } from './components/Approval';
import { DBController } from './components/DBController';
import { Header } from './components/Header';
import { SavedView } from './components/SavedView';
import { View } from './components/View';

import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <View />
      <Approval />
      <SavedView />
      <DBController />
    </div>
  );
}

export default App;
