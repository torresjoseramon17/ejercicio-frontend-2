import React, {Component} from "react";
const FormEmployees = ({addEmployee}) => (
    <form className="FormEmployees-form"
    onSubmit={addEmployee}
    >
    <div>
        <input
        type="text"
        placeholder="id"
        className="FormEmployees-input"/>
    </div>
    <div>
        <input
        type="text"
        placeholder="name"
        className="FormEmployees-input"/>
    </div>
    <div>
        <input
        type="text"
        placeholder="company"
        className="FormEmployees-input"/>
    </div>
    <div>
        <input
        type="text"
        placeholder="salary"
        className="FormEmployees-input"/>
    </div>
    <div>
        <input
        type="text"
        placeholder="age"
        className="FormEmployees-input"/>
    </div>
    <div>
        <input
        type="text"
        placeholder="phone"
        className="FormEmployees-input"/>
    </div>
    <div>
    <input
        type="text"
        placeholder="email"
        className="FormEmployees-input"/>
    </div>
    </form>


)
export default FormEmployees;