import React, { Component } from 'react';
import './App.css';
import ListItems from "./components/itemList"
import NavBar from "./components/navbar"


class App extends Component {
  state = {currentItem:{
    key:'',
    text:''
  },
    items: [
      { key: 1, text: 'Learn JavaScript' },
      { key: 2, text: 'Do cool projects in JavaScript' },
      { key: 3, text: 'Learn React' },
      { key: 4, text: 'Do cool projects in React' },
    ],
  };

  handleSubmit = () => {
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  };

  totalTasks=()=>{
    return this.props.state.items.length
  }

  deleteItem=(key)=>{
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })}

  setUpdate=(text,key)=>{
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
    
   
  }
  handleReset = ()=>{
    const items = []
    this.setState({ items });
  }

  render() { 
    console.log(this.state.items);
    const listItems = this.state.items.map((d) => <li key={d.key}>{d.text}</li>);
    return ( <React.Fragment>
    <NavBar totalTasks={this.state.items.length}/>
    <div className="container-for-tasks">
    <input
          type="text"
          className="form-control"
          value= {this.state.currentItem.text}
          placeholder="Enter tasks"
          onChange={(e) => {
            this.setState({
              currentItem:{
                text: e.target.value,
                key: Date.now()
              }
            });
            console.log(this.state);
          }}
        ></input>
        <button
          onClick={this.handleSubmit}
          className="btn btn-primary btn-sm m-2"
        >
          Add task
        </button> 
        <button className="btn btn-primary btn-sm m-2" onClick={this.handleReset}>Mark all as done</button>
        </div>
       
      <main className="container">
        < ListItems items={this.state.items} setUpdate={this.setUpdate} deleteItem={this.deleteItem}
        />
        </main>
      </React.Fragment> );
  }
}
 
export default App;
