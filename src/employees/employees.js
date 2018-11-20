import React, { Component } from 'react'
import employees from "./index.js"
import AddInfo from './informacion.js';
//import Add from './addemployees.js';
import User from "./Usar.js"

class Average extends Component {
  constructor(props){
    super(props);
    this.state={
      empleados: employees,
      id:'',
      name: '',
      company:'',
      salary:'',
      age: '',
      phone:'',
      email:''
    };
        this.add = this.add.bind(this);
        this.updateEmployees = this.updateEmployees.bind(this);
       
        
    
  }
  updateEmployees(e){
    this.setState({
      employees: e.target.value
    })
  }
 

  add(){
    this.props.addObj(this.state.employees , this.state.quantity);
    this.setState({
      employees:""
      
    })
  }
  deleteObj = (index, e) => {
    const obj = employees.assign([], this.state.obj);
    obj.splice(index, e);
    this.setState({obj:obj})
  }
  
 
  render() {
//creating table for employyes information header
  
    return (
        <div>
        
        
               
        <table>
             <thead>
                <tr>
                   <th><li key={employees.obj}>
                           {employees.obj}
                        </li></th>
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
          
                   <td><li key={employees.obj}>
                          {employees.obj}
                       </li></td>
                   <td>{obj.id}</td>
                   <td>{obj.name}</td>
                   <td>{obj.company}</td>
                   <td>
                       {new Intl.NumberFormat('MX', { 
                            style: 'currency', 
                           currency: 'MXN' 
                         }).format(obj.salary)}
                            </td>
                   <td>{obj.age}</td>
                   <td>{obj.phone}</td>
                   <td>{obj.email}</td>
          
          
          
                   <User 
                      id={obj.id}
                      delEvent={this.deleteObj.bind(this, index)}
                       >name={obj.name}</User>
          
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