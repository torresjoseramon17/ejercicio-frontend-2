import React, { Component } from 'react'

class AddInfo extends Component {

 
 render(){
  
  

    return(
      <div>
      <form onSubmit={this.addEmployees}>
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
        
      </form>
      
     </div>

   )
 }

 
}
export default AddInfo;