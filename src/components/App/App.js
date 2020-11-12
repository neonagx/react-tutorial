import React from 'react';
import Navigation from '../Navigation/Navigation';
import SaladMaker from '../SaladMaker/SaladMaker';
import UserContext from '../User/User';

import './App.css';

const user = {
  name: 'Constance',
  favorites: [
    'avocado',
    'carrot'
  ]
}

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Navigation />
        <SaladMaker />
      </UserContext.Provider>
    </div>
  );
}

export default App;
