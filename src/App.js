import React, { Component } from 'react'
import Average from './employees/employees.js'
//import AddInfo from './employees/informacion.js'
import Add from './employees/addemployees.js'
import User from "./employees/Usar.js"

class App extends Component {
  render() {
   
    return (
      <div>
      <Average />
      
      <Add />
      <User />
     </div>
    );
  }
}

export default App; 
