import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Search from './components/Search/Search';
import CardsContainer from './components/Containers/CardsContainer';

function App() {
  return (
    <Provider store={store}>
      <Search></Search>
      <CardsContainer/>
    </Provider>
  );
}

export default App;
