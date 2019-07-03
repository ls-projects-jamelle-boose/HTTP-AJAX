import React from "react";
import axios from "axios";

import "./App.css";

export default class App extends React.Component {
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
        {this.state.friends.map(homie => (
          <HomieDetails key={homie.id} homie={homie} />
        ))}
      </div>
    );
  }
}

function HomieDetails({ homie }) {
  const { name, age, email } = homie;
  return (
    <div>
      <h2>{name}</h2>
      <div>
        Age: <em>{age}</em>
      </div>
      <div>
        Email: <em>{email}</em>
      </div>
    </div>
  );
}
