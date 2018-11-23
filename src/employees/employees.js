import React, { Component } from "react";
import employees from "./index.js";
import AddInfo from "./informacion.js";




class Average extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empleados: employees,
      id: "",
      name: "",
      company: "",
      salary: "",
      USD$: "",
      age: "",
      phone: "",
      email: ""
    };
    this.add = this.add.bind(this);
    this.updateEmpleados = this.updateEmpleados.bind(this);
    
    
  }
  updateEmpleados(e) {
    this.setState({
      empleadoss: e.target.value
    });
  }

  add() {
    this.props.addObj(this.state.empleados);
    this.setState({
      empleados: ""
    });
  }
 //this deletes the user by using id of them
deleteUser = (obj, index) => {
  console.log('this is the id',obj.id);
  let {empleados} = this.state;
  empleados.splice(obj.id,1,);
  this.setState({
    empleados: empleados
  });
}
 
  render() {
    //creating table for employyes information header

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>
                <li key={employees.obj}>{employees.obj}</li>
              </th>
              <th>id</th>
              <th>name</th>
              <th>company</th>
              <th>Salary </th>
              <th>USD$</th>
              <th>age </th>
              <th>phone </th>
              <th>email </th>
            </tr>
          </thead>

          {/*function for maping employees array */}

          {this.state.empleados.map((obj, index) => (
            <tbody>
              <tr>
                <td>
                  <li key={employees.obj}>{employees.obj}</li>
                </td>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>{obj.company}</td>
                <td>
                  {/*function to get format money of empĺoyees salary */}
                  {new Intl.NumberFormat("MX", {
                    style: "currency",
                    currency: "MXN"
                  }).format(obj.salary)}
                </td>
                <td>
                  {/*function to get format money of empĺoyees salary */}
                  {new Intl.NumberFormat("USA", {
                    style: "currency",
                    currency: "USD"
                  }).format(obj.salary / 20.45)}
                </td>
                <td>{obj.age}</td>
                <td>{obj.phone}</td>
                <td>{obj.email}</td>
                
              <td><button onClick={this.deleteUser.bind(this,obj,index)} href="#">delete</button></td>

              </tr>
            </tbody>
          ))}
        </table>
        <AddInfo state={this.state} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default Average;
