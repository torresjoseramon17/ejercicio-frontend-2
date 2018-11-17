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
      <div className="table">
          <input name="name" value={this.props.state.name} onChange={this.props.handleChange}></input>
          
      </div>

   )
 }

 
}
export default AddInfo;