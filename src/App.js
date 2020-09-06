import React from "react";

import "./App.css";
import { Route } from "react-router-dom";
import AddUserPage from "./pages/AddUserPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import EditUserPage from "./pages/EditUser";

function App() {
  return <div className="App">
    <Navbar/>
    <Route path='/' exact component={HomePage} />
    <Route path="/add-user" exact component={AddUserPage}/>
    <Route path="/edit/:id" exact component={EditUserPage}/>
    
  </div>;
}

export default App;
