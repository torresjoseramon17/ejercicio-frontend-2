import React, { Component } from 'react'
import employees from "./index.js"
import AddInfo from './informacion.js';
import Add from './addemployees.js';
import User from "./Usar.js"

class Average extends Component {
  constructor(props){
    super(props);
    this.state=({
      empleados: employees,
      id:'',
      name: '',
      company:'',
      salary:'',
      age: '',
      phone:'',
      email:''
    });
        this.handleChange = this.handleChange.bind(this);
       
        
    
  }
 

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value })
    this.setState({ [e.target.name]: e.target.value })
    this.setState({ [e.target.company]: e.target.value })
    this.setState({ [e.target.salary]: e.target.value })
    this.setState({ [e.target.age]: e.target.value })
    this.setState({ [e.target.phone]: e.target.value })
    this.setState({ [e.target.email]: e.target.value })
  };
  deleteObj = (index, e) => {
    const obj = employees.assign([], this.state.obj);
    obj.splice(index, e);
    this.setState({obj:obj})
  }
  
 
  render() {
//creating table for employyes information header
  
    return (
        <div className="container">
        
        
               
    <table className="table">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>company</th>
           <th>Salary </th>
           <th>age </th>
           <th>phone </th>
           <th>email </th>
        </tr>
        </thead>
      
     
      
        { this.state.empleados.map((obj, index)=>

          
         
        
        <tbody>
        
          
          <tr>
          <td>{obj.id}</td>
            <td>{obj.name}</td>
          <td>{obj.company}</td>
          <td>{obj.salary}</td>
          <td>{obj.age}</td>
          <td>{obj.phone}</td>
          <td>{obj.email}</td>
          </tr>

          <User 
           id={obj.id}
           delEvent={this.deleteObj.bind(this, index)}
          >name={obj.name}</User>
         
        </tbody>
        
        
        )}
        
      
      
    </table>
    <AddInfo state={this.state} handleChange={this.handleChange}/>
   
    
    </div>
    );
  }
}

export default Average; 