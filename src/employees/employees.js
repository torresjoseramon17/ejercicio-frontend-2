import React, { Component } from 'react'
import employees from "./index.js"

class Average extends Component {
  render() {
    console.log(employees)
    return (
        <div className="container">
        
               
    <table className="table">
      <thead>
        <tr>
          
          <th>name</th>
          <th>company</th>
           <th>Salary </th>
           <th>age </th>
           <th>phone </th>
           <th>email </th>
        </tr>
        </thead>
        { employees.map(obj=>
        
        <tbody>
          <tr><td>{obj.name}</td>
          <td>{obj.company}</td>
          <td>{obj.salary}</td>
          <td>{obj.age}</td>
          <td>{obj.phone}</td>
          <td>{obj.email}</td>
          </tr></tbody>
        )}
      
      
    </table>
    </div>
    );
  }
}

export default Average; 