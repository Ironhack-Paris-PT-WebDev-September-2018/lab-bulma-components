import React, { Component } from "react";

class CoolButton extends Component {
  render() {
    const { className, value } = this.props;
    return (
      <button
        className={`button ${className} ${this.props.isSmall &&
          "is-small"} ${this.props.isText && "is-text"} ${this.props.isLink &&
          "is-link"} ${this.props.isDanger && "is-danger"} ${this.props
          .isSuccess && "is-success"}`}
      >
        {this.props.children}
      </button>
    );
  }
}

export default CoolButton;
