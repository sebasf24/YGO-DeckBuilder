import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './Redux/store';
import DeckBuilder from './components/DeckBuilder/DeckBuilder'


function App() {
  //console.log(document.getElementById('root'))
  //asdasdd
  return (
    <Provider store={store}>
      <DeckBuilder/>
    </Provider>
  );
}

export default App;
