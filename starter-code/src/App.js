import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar.jsx"
import FormField from "./FormField.jsx"
import Signup from "./Signup.jsx"

class App extends Component {
  render() {
    return (
    <div className="App">
      <div className="container">
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <hr />
        <Signup />
      </div>
    </div>
   );
 } 
}

export default App;