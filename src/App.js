import React, { Component } from 'react'
import Average from './employees/employees.js'
import User from "./employees/Usar.js"
import Converter  from"./employees/converter.js"


/*main component where all components are invoqued */
class App extends Component {
  
  render() {
   
    return (
      <div>
        <Average />
        <User />
        <Converter />
     </div>
    );
  }
}

export default App; 
