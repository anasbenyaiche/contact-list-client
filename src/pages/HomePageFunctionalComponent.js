import React, { useState, useEffect } from "react";
import CardContainer from "../containers/CardContainer";
import axios from "axios";
export default function HomePage() {
  const [users, setUsers] = useState([]);
  const getUser = () => {
    axios
      .get("http://localhost:8000/user")
      .then((res) => this.setState({ users: res.data }));
  };
  useEffect(async () => {
    await getUser();
  }, []);

  return (
    <div>
      <CardContainer />
    </div>
  );
}
