import React, { Component } from "react";
import CoolButton from "./CoolButton";
import FormField from "./FormField";
import Message from "./Message";

class Signup extends Component {
  render() {
    return (
      <div>
        <h2>Signup page</h2>
        <FormField label="Lastname" placeholder="Enter your lastname" />
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter your name"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="e.g. alexsmith@gmail.com"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="password" placeholder="" />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" />I agree to the{" "}
              <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>
        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>.
        </Message>

        <div className="field is-grouped">
          <div className="control">
            <CoolButton isSmall isSuccess isLink>
              Submit
            </CoolButton>
          </div>
          <div className="control">
            <CoolButton isSmall isDanger isText>
              Cancel
            </CoolButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
