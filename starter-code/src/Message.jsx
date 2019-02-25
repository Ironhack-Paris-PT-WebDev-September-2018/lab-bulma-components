import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, children } = this.props;
    return (
      <article class="message is-info">
        <div class="message-header">
          <p>{title}</p>
          <button class="delete" aria-label="delete" />
        </div>
        <div class="message-body">{children}</div>
      </article>
    );
  }
}

export default Message;
