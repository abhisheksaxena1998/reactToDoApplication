import React, { Component } from 'react';
import logo from './logo.svg';
import Formz from "./components/form"
import './App.css';


class App extends Component {
  state = {
    counters: [
      { id: 1, value: 'task 1' },
      { id: 2, value: 'task 2' },
      { id: 3, value: 'task 3' },
      { id: 4, value: 'task 4' },
    ],
  };

  handleSubmit = () => {
    console.log("Add a new task");
  };
  
  handleReset = ()=>{
    const counters = []
    this.setState({ counters });
  }

  render() { 
    console.log(this.state.counters)
    const listItems = this.state.counters.map((d) => <li key={d.id}>{d.value}</li>);
    return ( <React.Fragment>
      <main className="container">
      <Formz counters={this.state.counters} onClick={this.handleSubmit} onReset={this.handleReset} />
      </main>
      <div>
      {listItems }
      </div>
      </React.Fragment> );
  }
}
 
export default App;
