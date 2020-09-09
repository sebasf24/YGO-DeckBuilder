import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Search from './components/Search/Search';
import Container from './components/Container/Container';

function App() {
  return (
    <Provider store={store}>
      <Search></Search>
      <Container/>
    </Provider>
  );
}

export default App;
