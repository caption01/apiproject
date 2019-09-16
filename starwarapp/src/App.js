import React, {Component} from 'react';
import TopHead from './TopHead.js'
import Information from './Information.js'

import './App.css'

class App extends Component{

  constructor(){
    super();
    this.state = {
      name: ""
    }
  }

  componentDidMount(){
        fetch('https://swapi.co/api/people/1/')
        .then(res => {
          return res.json()
        })

        .then(people => {
          this.setState({name: people})
        })
    }
  
  
  render(){

    return (
      <div>
        <TopHead></TopHead>
        <Information name={this.state.name} ></Information>
      </div>
    )
  }



}

export default App;