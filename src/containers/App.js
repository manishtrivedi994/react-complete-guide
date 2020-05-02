import React, { useState, Component } from 'react';
import Radium, { StyleRoot} from 'radium';
import './App.css';
import Persons from '../components/Persons/Persons'

class App extends Component {
  
    state = {
      persons: [
        {id: 'hshfk', name: 'Manish', age: 23},
        {id: 'ekss', name: 'Manu', age: 24},
        {id: 'ojoj', name: 'Max', age: 32}
      ],
      otherState: 'Some other state',
      showPersons: false
    }
    
    
    nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
          return p.id === id;
      });

      const person = { 
        ...this.state.persons[personIndex]
      };
      //  const person = Object.assign({} , this.state.persons[personIndex]);

      person.name = event.target.value;
      
      const persons = [...this.state.persons];
      persons[personIndex]=person;

      this.setState({ persons: persons});
    }
    
    deletePersonHandler = (personIndex) => {
      //const persons = this.state.persons;
      //const persons = this.state.persons.slice();
      const persons = [...this.state.persons]; // Spread operator is used which converts the array in a list in a new copy
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
    }
    
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

    render() {
      
      const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
        }

      };

      let persons = null;
      if(this.state.showPersons) {
        persons = (
          <div>
            <Persons
            persons={this.state.persons}
            clicked= {this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
          </div>
        );
          style.backgroundColor= 'red';
          style[':hover']= {
            backgroundColor: 'salmon',
            color: 'black'
          }

      }    
      
      const classes = [];
      if(this.state.persons.length<=1) {
        classes.push('red'); //classes = ['red']
      }
      if(this.state.persons.length<=2) {
        classes.push('bold'); //classes = ['red', 'bold']
      }

      return (
        <div className="App">
          <h1>Hi, I am a React App</h1>
          <p className={classes.join(' ')}>Another Heading</p> 
          <button 
          onClick={this.togglePersonsHandler}
          style = {style}>Toggle Persons
          </button> 
          
          {persons}
             
        </div>
      );
    }

    //this.switchNameHandler.bind(this, 'Maximilian')                   ------>used in button to change names dynamically
    //React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi, I am a react app!!!'))
    //<button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button> This can also be use in place of <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button> 
}

//export default Radium(App);
export default Radium(App);
