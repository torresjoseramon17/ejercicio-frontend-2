import React, { Component } from "react";
import $ from "jquery";

/*component that add  more employees information */
class AddInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      company: "",
      salary: "",
      age: "",
      phone: "",
      email: ""
    };
    /* calll for each property and value of the object*/
    this.handleId = this.handleId.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleCompany = this.handleCompany.bind(this);
    this.handleSalary = this.handleSalary.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleEmail = this.handleEmail.bind(this);

    /*handle even for each value of the object */
  }
  handleId(e) {
    e.preventDefault();
    this.setState({
      id: e.target.value
    });
  }

  handleName(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value
    });
  }
  handleCompany(e) {
    e.preventDefault();
    this.setState({
      company: e.target.value
    });
  }

  handleSalary(e) {
    e.preventDefault();
    this.setState({
      salary: e.target.value
    });
  }

  handleAge(e) {
    e.preventDefault();
    this.setState({
      age: e.target.value
    });
  }

  handlePhone(e) {
    e.preventDefault();
    this.setState({
      phone: e.target.value
    });
  }

  handleEmail(e) {
    e.preventDefault();
    this.setState({
      email: e.target.value
    });
  }

  /*post request to call each value*/

  addIEmpleados(id, name, company, salary, age, phone, email) {
    $.ajax({
      url: "/items",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({
        id: id,
        name: name,
        company: company,
        salary: salary,
        age: age,
        phone: phone,
        email: email
      }),
      success: data => {},
      error: (xhr, status, error) => {}
    });
  }
  submitItem(event) {
    event.preventDefault();
    this.addItem(
      this.state.id,
      this.state.name,
      this.state.company,
      this.state.salary,
      this.state.age,
      this.state.phone,
      this.state.email
    );

    this.setState({
      id: "",
      name: "",
      company: "",
      salary: "",
      age: "",
      phone: "",
      email: ""
    });
    alert("Success!");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addEmpleados}>
          {/* inputs for employyes information */}
          <input
            value={this.state.id}
            placeholder="id"
            onChange={this.handleId}
          />
          <input
            value={this.state.name}
            placeholder="name"
            onChange={this.handleName}
          />
          <input
            value={this.state.company}
            placeholder="company"
            onChange={this.handleCompany}
          />
          <input
            value={this.state.salary}
            placeholder="salary"
            onChange={this.handleSalary}
          />
          <input
            value={this.state.age}
            placeholder="age"
            onChange={this.handleAge}
          />
          <input
            value={this.state.phone}
            placeholder="phone"
            onChange={this.handlePhone}
          />
          <input
            value={this.state.email}
            placeholder="email"
            onChange={this.handleEmail}
          />

          <button onClick={this.submitEmpleados}>¡Añadir empleado!</button>
          <br />
        </form>
      </div>
    );
  }
}

export default AddInfo;
