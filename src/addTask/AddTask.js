import React, { Component } from 'react'

export default class AddTask extends Component {
    state={
        newText:""
    }

    handlechange=(e)=>{
        this.setState({newText:e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.state.newText.trim()===""?alert("Veuillez saisir une chaine non vide")
        :this.props.ajout(this.state.newText)
       this.setState({newText:""})
    }

    render() {
        return (
            <div className="add">
                <h1>To Do List</h1>
                <form onSubmit={this.handleSubmit} action="">
                <input type="text" value={this.state.newText} onChange={this.handlechange}/>
                <button type="submit" >Add</button>
                </form>
            </div>
        )
    }
}
