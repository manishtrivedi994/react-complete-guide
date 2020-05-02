import React from 'react';
import Radium from 'radium';
//import styled from 'styled-components'
import classes from './Person.css'

/*const style = {
    width: '60%',
    margin: '16px auto',
    border: '1px solid rgb(238, 226, 226)',
    boxShadow: '0 2px 3px rgb(7, 7, 7)',
    padding: '16px',
    textAlign: 'center'

}*/
const person = (props) => {
    return (
        <div className={classes.Person} >
        
            <p onClick={props.click}>I'm  {props.name} and I am {props.age} years old!!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Radium(person);
