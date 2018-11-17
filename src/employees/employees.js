import React, { Component } from 'react'
import employees from "./index.js"
import AddInfo from './informacion.js';

class Average extends Component {
  constructor(props){
    super(props);
    this.state=({
      empleados: employees,
      id:'',
      name: '',
      company:'',
      age: '',
      phone:'',
      email:''
    });
        this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
      
        { this.state.empleados.map(obj=>
        
        <tbody>
          
          <tr>
          <td>{obj.id}</td>
            <td>{obj.name}</td>
          <td>{obj.company}</td>
          <td>MXN${obj.salary}.00</td>
          <td>{obj.age}</td>
          <td>{obj.phone}</td>
          <td>{obj.email}</td>
          </tr>
         
        </tbody>
        )}
      
      
    </table>
    <AddInfo state={this.state} handleChange={this.handleChange}/>
    </div>
    );
  }
}

export default Average; 