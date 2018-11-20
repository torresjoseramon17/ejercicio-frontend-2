import React, { Component } from 'react'

class AddInfo extends Component {
  constructor(props){
    super(props);
    this.state= {
      empleados:[]

    };
    this.addEempleados = this.addEempleados.bind(this);
     
    
       
        
    
  }
  addEempleados(e) {
    if (this._inputElement.value !== "") {
      var newEmpleado = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          empleados: prevState.empleados.concat(newEmpleado)
        };

      });
    }

    this._inputElement.value = "";

    console.log(this.state.empleados);

     e.preventDefault();
  }

 
 render(){
  
  

    return(
      <div className="Add">
      <form onSubmit={this.addEmpleados}>
      <div>
        <input ref={(a) => this._inputElement = a}
           placeholder="id"></input>
         
     </div>
      <div>
        <input ref={(a) => this._inputElement = a}
           placeholder="name"></input>
         
     </div>
     <div>
        <input ref={(a) => this._inputElement = a}
           placeholder='company'></input>
         
     </div>
     <div>
         <input ref={(a) => this._inputElement = a}
              placeholder='salary'></input>
          
     </div>
     <div>
              <input ref={(a) => this._inputElement = a}
                 placeholder='age'></input>
                 
    </div>
    <div>
         <input ref={(a) => this._inputElement = a}
            placeholder='phone'></input>
          
   </div>
   <div>
          <input ref={(a) => this._inputElement = a}
             placeholder='email'></input>
           
   </div>
       <button type="add">Add</button>
        
      </form>

      
     </div>

   )
 }

 
}
export default AddInfo;