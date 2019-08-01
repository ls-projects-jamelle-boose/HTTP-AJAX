import React, { Component } from "react";
import { Link } from "react-router-dom";

class Friend extends Component {
  render() {
    const { id, name, age, email, removeFriend } = this.props;

    return (
      <div className="friend">
        <section className="friend-header">
          <Link
            to={`/edit/${id}`}
            onClick={() => this.props.editFriend({ name, age, email })}>
            <h2>
              {name} ({age})
            </h2>
          </Link>
          <button onClick={() => removeFriend(id)}>Remove</button>
        </section>
        <hr />
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    );
  }
}

export default Friend;
