import React from "react";

const Greeting = (props) => {
    const {name, age, id} = props;
    return  <p> User id: {id}. My name is {name}, my age is: {age}!</p> 
  }

export default Greeting;