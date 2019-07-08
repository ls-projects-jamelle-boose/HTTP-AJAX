// 1.  Add a form to gather information about a new friend
// 1.  Add a button to save the new friend by making a`POST` request to the same endpoint listed above.

import React, { Component } from "react";
import axios from "axios";

export default class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  changeHandler = event => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [event.target.name]: event.target.value
      }
    });
  };

  addFriend = event => {
    let friend = this.state.newFriend;
    event.preventDefault();
    axios
      .post(`http://localhost:5000/friends`, friend)
      .then(response =>
        this.setState({
          friends: response.data
        })
      )
      .catch(error => console.error(error));
    this.setState({
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
    });
    // window.location.reload();
  };

  deleteFriend = (event, id) => {
    event.preventDefault();
    axios.delete(`http://localhost:5000/friends/${id}`).then(response =>
      this.setState({
        friends: response.data
      })
    );
  };

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
              value={this.state.newFriend.name}
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
              value={this.state.newFriend.age}
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
              value={this.state.newFriend.email}
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
              onClick={this.addFriend}>
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
