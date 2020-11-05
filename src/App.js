import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Search from './components/Search/Search';
import CardContainer from './components/Container/Container.js';

function App() {
  //console.log(document.getElementById('root'))
  return (
    <Provider store={store}>
      <Search></Search>
      <CardContainer/>
    </Provider>
  );
}

export default App;
