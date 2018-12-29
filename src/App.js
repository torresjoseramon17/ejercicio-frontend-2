import React, { Component } from 'react'
import Average from './employees/employees.js'
import FormEmployee from "./employees/form.js"



/*main component where all components are invoqued */
class App extends Component {
  
  render() {
   
    return (
      <div>
        <Average />
        <FormEmployee />
     </div>
    );
  }
}

export default App; 
