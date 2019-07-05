import React from "react";
import axios from "axios";

import HomieForm from "./components/HomieForm";

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
        <HomieForm />
      </div>
    );
  }
}

function HomieDetails({ homie }) {
  const { name, age, email } = homie;
  return (
    <div>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Email: {email}</div>
    </div>
  );
}
