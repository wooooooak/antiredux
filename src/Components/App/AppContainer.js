import React, { Component } from 'react';
import AppPresenter from './AppPresenter';
import Store from 'store';

class App extends Component {
  render() {
    return (
      <Store.Provider>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default App;
