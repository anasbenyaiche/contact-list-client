import React from "react";
import {Link } from "react-router-dom"
import axios from 'axios'

export default class AddUserPage extends React.Component {
  state = {
    name: "",
    email: "",
    age: "",
    phone: "",
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  handleClick = () => {
    axios.post("http://localhost:8000/user/add", this.state)

  }

  render() {
    const { name, email, age, phone } = this.state;
    console.log(this.state);
    return (
      <div style={{ width: "30vw",padding:"50px" }}>
        <label className="form-check-label">Name</label>
        <input
          value={name}
          onChange={this.handleChange}
          name="name"
          className="form-control"
        />
        <label className="form-check-label">email</label>
        <input
          value={email}
          onChange={this.handleChange}
          name="email"
          className="form-control"
        />
        <label className="form-check-label">age</label>
        <input
          value={age}
          onChange={this.handleChange}
          name="age"
          className="form-control"
        />
        <label className="form-check-label">phone</label>
        <input
          value={phone}
          onChange={this.handleChange}
          name="phone"
          className="form-control"
        />
        <br/>
        <Link  onClick={this.handleClick} className="btn btn-light">Add user</Link>
      
      </div>
    );
  }
}
