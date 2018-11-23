import React, { Component } from "react";
import employees from ".";

/*component that add  more employees information */
class AddInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empleados: employees,
      id: "",
      name: "",
      company: "",
      salary: "",
      age: "",
      phone: "",
      email: ""
    };
  }
  //to add user
addEmpleado = () => {
  this.setState({
      add : this.state.empleados
  })
  console.log('yessss!!! click ma agai');
}
//value of user
update = (e) => {
  this.setState({ add: e.target.value })
}


  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default AddInfo;
