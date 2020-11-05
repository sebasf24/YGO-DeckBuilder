import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './src/store';
import Search from './src/components/Search/Search';
import CardContainer from './src/components/Container/Container.js';

function App() {
  console.log(document.getElementById('root'))
  return (
    <Provider store={store}>
      <Search></Search>
      <CardContainer/>
    </Provider>
  );
}

export default App;
