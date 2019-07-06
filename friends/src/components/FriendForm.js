// 1.  Add a form to gather information about a new friend
// 1.  Add a button to save the new friend by making a`POST` request to the same endpoint listed above.

import React, { Component } from "react";

export default class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeHandler = event;

  render() {
    return (
      <div className="App">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              name="name"
              type="string"
              placeholder="Name"
              onChange={this.changeHandler}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Age</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-success"
              name="age"
              type="number"
              placeholder="Age"
              onChange={this.changeHandler}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user" />
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-danger"
              name="email"
              type="string"
              placeholder="Email"
              onChange={this.changeHandler}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button
              className="button is-link"
              type="submit"
              onClick={this.onClick}>
              Submit
            </button>
          </div>
          <div className="control">
            <button className="button is-text" onClick={this.onClick}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
