import React from "react";
import CardContainer from "../containers/CardContainer";
import axios from "axios";
export default class HomePage extends React.Component {
  state = {
    users: [],
  };

  getUser() {
    axios
      .get("http://localhost:8000/user")
      .then((res) => this.setState({ users: res.data }));
  }
  componentDidMount() {
    this.getUser();
  }

  render() {
    const { users } = this.state;
    console.log(users);
    return (
      <div>
        <CardContainer users={users} />
      </div>
    );
  }
}
