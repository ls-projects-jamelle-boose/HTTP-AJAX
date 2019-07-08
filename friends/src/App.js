import React, { Component } from "react";
import axios from "axios";

import FriendForm from "./components/FriendForm";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error(`Server Error: ${error}`);
      });
  }

  render() {
    return (
      <div>
        {this.state.friends.map(friend => (
          <FriendDetails key={friend.id} friend={friend} />
        ))}
        <FriendForm />
      </div>
    );
  }
}

function FriendDetails({ friend }) {
  const { name, age, email } = friend;
  return (
    <div>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Email: {email}</div>
    </div>
  );
}
