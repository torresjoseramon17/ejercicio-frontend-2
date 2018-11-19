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
      <div className="obj">
          <input id="id" value={this.props.state.id} onChange={this.props.handleChange}></input>
          <input name="name" value={this.props.state.name} onChange={this.props.handleChange}></input>
          <input company="company" value={this.props.state.company} onChange={this.props.handleChange}></input>
          <input salary="salary" value={this.props.state.salary} onChange={this.props.handleChange}></input>
          <input age="age" value={this.props.state.age} onChange={this.props.handleChange}></input>
          <input phone="phone" value={this.props.state.phone} onChange={this.props.handleChange}></input>
          <input email="email" value={this.props.state.email} onChange={this.props.handleChange}></input>
          
      </div>

   )
 }

 
}
export default AddInfo;