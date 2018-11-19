import React, { Component } from 'react'

class AddInfo extends Component {
  constructor(props){
    super(props);
    // this.state=({
    //   id:'',
    //   name: '',
    //   company:'',
    //   age: '',
    //   phone:'',
    //   email:''
   // });

  }
 
 render(){
  
  

    return(
      <div className= "employees">
          <input id="obj" value={this.props.state.obj} onChange={this.props.handleChange}></input>
          
         
          
          
      </div>

   )
 }

 
}
export default AddInfo;