import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      Hello, {this.props.firstName}!
    )
  }
}

export default User;