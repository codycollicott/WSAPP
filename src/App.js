import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';
import store from './Store';
import Navigation from './Components/Navigation';

console.disableYellowBox = true; // eslint-disable-line

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}