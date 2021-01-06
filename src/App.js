import React, { Component } from 'react';
import './App.css';
import ListItems from "./components/itemList"


class App extends Component {
  state = {currentItem:{
    key:'',
    text:''
  },
    items: [
      { key: 1, text: 'task 1' },
      { key: 2, text: 'task 2' },
      { key: 3, text: 'task 3' },
      { key: 4, text: 'task 4' },
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
    console.log(this.state.items)
    const listItems = this.state.items.map((d) => <li key={d.key}>{d.text}</li>);
    return ( <React.Fragment>

    <input
          type="text"
          className="input"
          value= {this.state.currentItem.text}
          placeholder="Enter task"
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
        <button onClick={this.handleReset}>Mark all as done</button>

      <div>
      {listItems }
      </div>
      <main className="container">
        < ListItems items={this.state.items} setUpdate={this.setUpdate}
        />
        </main>
      </React.Fragment> );
  }
}
 
export default App;
