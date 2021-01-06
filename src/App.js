import React, { Component } from 'react';
import './App.css';
import swal from "sweetalert";
import ListItems from "./components/itemList"
import NavBar from "./components/navbar"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


class App extends Component {
  state = {currentItem:{
    key:'',
    text:''
  },
    items: [
      { key: 1, text: 'Learn JavaScript' },
      { key: 4, text: 'Do cool projects in React' },
    ],
  };

  checkComplete(){
    if (this.state.items.length===0) return (<div className="imagebox">
      <img className="img-completed" align="center" src="https://raw.githubusercontent.com/abhisheksaxena1998/reactToDoApplication/main/public/completed.png"></img>
      </div>)
    
    }

  handleSubmit = () => {
    
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      swal(
        'Added !',
        'To Do Saved !',
        'success'
                 )
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
    swal(
      'Completed !',
      'Marked all as done !',
      'warning'
               )
    const items = []
    this.setState({ items });
  }

  render() { 
    console.log(this.state.items);
    const listItems = this.state.items.map((d) => <li key={d.key}>{d.text}</li>);
    return ( <React.Fragment>
    <NavBar totalTasks={this.state.items.length}/>
    <div className="container-for-tasks">
    <div class="card">
  <div class="card-body">
    
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
        type="button" className="btn blue-gradient waves-effect waves-light "
          onClick={this.handleSubmit}
        >
          Add task
        </button> 
        <button className="btn blue-gradient waves-effect waves-light " onClick={this.handleReset}>Mark all as done</button>
        </div>
        {this.checkComplete()}
        </div></div>
        
       
      <main className="container">
        < ListItems items={this.state.items} setUpdate={this.setUpdate} deleteItem={this.deleteItem}
        />
        </main>
        
      </React.Fragment> );
  }
}
 
export default App;
