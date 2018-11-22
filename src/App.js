import React, { Component } from 'react'
import Average from './employees/employees.js'
import User from "./employees/Usar.js"


/*main component where all components are invoqued */
class App extends Component {
  
  render() {
   
    return (
      <div>
        <Average />
        <User />
     </div>
    );
  }
}

export default App; 
