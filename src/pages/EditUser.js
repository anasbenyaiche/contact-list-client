import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class EditUserPage extends React.Component {
  state = {
    name: "",
    email: "",
    age: "",
    phone: "",
  };

  getTargetUser() {
    axios
      .get(`http://localhost:8000/user/${this.props.match.params.id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          name: res.data.name,
          email: res.data.email,
          age: res.data.age,
          phone: res.data.phone,
        });
      });
  }

  componentDidMount() {
    this.getTargetUser();
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  handleClick = () => {
    axios.put(
      `http://localhost:8000/user/${this.props.match.params.id}`,
      this.state
    );

  };

  render() {
    const { name, email, age, phone } = this.state;
    console.log(this.state);
    return (
      <div style={{ width: "30vw", padding: "50px" }}>
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
        <br />
        <Link to="/" onClick={this.handleClick} className="btn btn-light">
          Edit user
        </Link>
      </div>
    );
  }
}
