import axios from "axios";
import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import FriendsList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";

function Header({ name }) {
  return (
    <header>
      <h1 className="main">{`${name}'s Friends List`}</h1>
      <nav className="nav">
        <NavLink to="/add">Add Friend</NavLink>
        <NavLink exact to="/">
          Friends List
        </NavLink>
      </nav>
    </header>
  );
}

class App extends Component {
  state = {
    config: {
      name: "Jamelle",
      endpoint: "http://localhost:5000/friends"
    },
    friends: [],
    toUpdate: null
  };

  addFriend = (user, friend) => {
    axios
      .post(user, friend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  };

  editFriend = friend => this.setState({ toUpdate: { ...friend } });

  deleteFriend = (user, id) => {
    axios
      .delete(`${user}/${id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  };

  getFriends = user => {
    axios
      .get(user)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  };

  updateFriend = (user, friend) => {
    axios
      .put(user, friend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getFriends(this.state.config.endpoint);
  }

  render() {
    const { name, endpoint } = this.state.config;

    return (
      <>
        <Header name={name} />
        <Route
          exact
          path="/"
          render={props => (
            <FriendsList
              {...props}
              deleteFriend={this.deleteFriend}
              editFriend={this.editFriend}
              updateFriend={this.updateFriend}
              endpoint={endpoint}
              friends={this.state.friends}
            />
          )}
        />
        <Route
          path="/add"
          render={props => (
            <FriendForm
              {...props}
              addFriend={this.addFriend}
              endpoint={endpoint}
            />
          )}
        />
        <Route
          path="/edit/:id"
          render={props => (
            <FriendForm
              {...props}
              endpoint={endpoint}
              toUpdate={this.state.toUpdate}
              updateFriend={this.updateFriend}
            />
          )}
        />
      </>
    );
  }
}

export default App;
