import React, { Component } from 'react'
import { TaskListe } from './taskListe/TaskListe'
import './App.css'
import AddTask from './addTask/AddTask'



export default class App extends Component {
  state={
    items:[{id:Math.random(), action:"learn state", isdone:false},
    {id:Math.random(), action:"HTML JSX", isdone:true},
    {id:Math.random(), action:"React Bootstrap", isdone:false}]
  }

  handledelete=(itemId)=>{
    this.setState({items:this.state.items.filter(el=>el.id!==itemId)})}

  handleComplete=(itemId)=>{
    this.setState({items:this.state.items.map(el=>el.id===itemId?
      {...el,isdone:!el.isdone}:el)})
  }  

  handleAdd=(input)=>{
    const newtask={id:Math.random(),action:input,isdone:false}
    this.setState({items:[...this.state.items,newtask]})
  }


  render() {
    return (
      <div className="app">
      <AddTask ajout={this.handleAdd}/>
        <TaskListe tab={this.state.items}  del={this.handledelete} complete={this.handleComplete}/>

      </div>
    )
  }
}
