import React, { Component } from 'react'
import $ from "jquery";

class AddInfo extends Component {
  constructor(props){
    super(props);
    this.state= {
      id:'',
      name:'',
      company:'',
      salary:'',
      age:'',
      phone:'',
      email:''

    };
    this.handleId = this.handleId.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleCompany = this.handleCompany.bind(this);
    this.handleSalary = this.handleSalary.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
     
    
       
        
    
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
  addItem(id, name, company, salary, age, phone, email) {
    $.ajax({
    url:'/items',
    type: "POST",
    contentType: 'application/json',
    data: JSON.stringify({
      id:id,
      name: name,
      company: company,
      salary: salary,
      age: age,
      phone:phone,
      email: email
      
    }),
    success:(data)=> {
    },
    error: (xhr,status,error) => {
    }
  });
}
submitItem(event) {
  event.preventDefault();
  this.addItem(this.state.id, this.state.name, this.state.company, this.state.salary, this.state.age, this.state.phone, this.state.email );

  this.setState({
    id: '',
    name: '',
    company: '',
    salary: '',
    age: '',
    phone: '',
    email: ""
  
  });
  alert('Success!')
}
 
  

 
 render(){
  
  

    return(
      <div className="Add">
      <form onSubmit={this.addEmpleados}>
      <div>
        <input ref={(a) => this._inputElement = a}
           placeholder="id"></input>
         
     </div>
      <div>
        <input ref={(a) => this._inputElement = a}
           placeholder="name"></input>
         
     </div>
     <div>
        <input ref={(a) => this._inputElement = a}
           placeholder='company'></input>
         
     </div>
     <div>
         <input ref={(a) => this._inputElement = a}
              placeholder='salary'></input>
          
     </div>
     <div>
              <input ref={(a) => this._inputElement = a}
                 placeholder='age'></input>
                 
    </div>
    <div>
         <input ref={(a) => this._inputElement = a}
            placeholder='phone'></input>
          
   </div>
   <div>
          <input ref={(a) => this._inputElement = a}
             placeholder='email'></input>
           
   </div>
       <button type="add">Add</button>
        
      </form>

      
     </div>

   )
 }

 
}

export default AddInfo;