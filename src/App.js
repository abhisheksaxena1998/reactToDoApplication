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
    text:'',
    status:''
  },
    items: [
      { key: 1, text: 'Learn JavaScript', status: "completed" },
      { key: 4, text: 'Do cool projects in React', status: "completed"  },
      { key: 9, text: 'Do cool projects', status: "notcompleted"  },
    ],
  };

  checkComplete(){
    if (this.state.items.length===0) {return (<div className="imagebox">
      <img className="img-completed" alt="" align="center" src="https://raw.githubusercontent.com/abhisheksaxena1998/reactToDoApplication/main/public/completed.png"></img>
      </div>)}
      else{
        return (<div className="imagebox">
      <img className="img-completed" alt="" align="center" src="https://raw.githubusercontent.com/abhisheksaxena1998/reactToDoApplication/main/public/todo.png"></img>
      </div>)
      }
    
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
        key:'',
        status: ""
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

    markdoneItem=(item)=>{
      const filteredItems= this.state.items.filter(itemz =>
        itemz.key!==item.key);
        var newItem={
          key:item.key,
          text:item.text,
          status:"completed"}
        const items = [...filteredItems, newItem];

        this.setState({
          items: items,
          currentItem:{
            text:'',
            key:'',
            status: ""
          }
        })
        console.log("done filtered",item)
    }

    markincompleteItem=(item)=>{
      const filteredItems= this.state.items.filter(itemz =>
        itemz.key!==item.key);
        var newItem={
          key:item.key,
          text:item.text,
          status:"notcompleted"}
        const items = [...filteredItems, newItem];

        this.setState({
          items: items,
          currentItem:{
            text:'',
            key:'',
            status: ""
          }
        })
        console.log("done filtered",item)
    }

  setUpdate=(text,key)=>{
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        item.text= text;
      }
      return "";
    })
    this.setState({
      items: items
    })  
  }
  handleReset = ()=>{
    navigator.vibrate(100);
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
    return ( <React.Fragment>
    <NavBar totalTasks={this.state.items.length}/>
    <div className="container-for-tasks">
    <div className="card">
  <div className="card-body">
    
    <input
          type="text"
          className="form-control"
          value= {this.state.currentItem.text}
          placeholder="Enter tasks"
          onChange={(e) => {
            this.setState({
              currentItem:{
                text: e.target.value,
                key: Date.now(),
                status:"notcompleted"
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
        < ListItems items={this.state.items} status={this.state.items.status} markdoneItem={this.markdoneItem} markincompleteItem={this.markincompleteItem} setUpdate={this.setUpdate} deleteItem={this.deleteItem}
        />
        </main>
        
      </React.Fragment> );
  }
}
 
export default App;
