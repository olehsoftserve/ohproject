import React from 'react';
import { Headline, Greeting } from "./Components/Layouts";

export const App = () => {
  return (
      <div>
          <Headline />
          <Greeting id={this.props.id} name={this.props.name} age={this.props.age}/>
          <p>Testing rendering with JSX</p>
      </div>
  )
}
