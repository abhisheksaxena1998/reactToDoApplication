import React, { Component } from 'react';
import logo from './logo.svg';
import Form from "./components/form"
import './App.css';


class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  }
  render() { 
    console.log(this.state.counters)
    return ( <React.Fragment>

      <Form />
      </React.Fragment> );
  }
}
 
export default App;
