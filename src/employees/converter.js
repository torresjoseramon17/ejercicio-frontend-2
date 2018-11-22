import React, { Component } from 'react'




class Converter extends Component {
  
  render() {
   
    return (
      <div>
          
         <input type="text" name="pesos"></input>
         <input type="text" name="dollar"></input>

         <input type="button" value="convertir" onClick="calcular"></input>
       
     </div>
    );
  }
}

export default Converter;