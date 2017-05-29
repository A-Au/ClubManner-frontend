import React from 'react';
import DataCollection from './jsx/DataCollection.jsx';
import {render} from 'react-dom';
import css from './main.css';

class App extends React.Component {
  render () {
    return (<DataCollection/>);
  }
}

render(<App/>, document.getElementById('app'));
