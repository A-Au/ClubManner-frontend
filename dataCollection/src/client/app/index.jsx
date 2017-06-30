import React from 'react';
import Main from './jsx/Main.jsx';
import {render} from 'react-dom';
import css from './main.css';

class App extends React.Component {
  render () {
    return (<Main/>);
  }
}

render(<App/>, document.getElementById('app'));
