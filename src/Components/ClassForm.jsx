import React, { Component } from 'react'
import "../App.css"

export class ClassForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: " ",
      email: " ",
      password: "",
    };
  }

  nameHandler() {
    this.setState({
      name: "Orison Tetteh",
    });
  }

  emailHandler() {
    this.setState({
      email: "orisontetteh@gmail.com",
    });
  }

  passwordHandler() {
    this.setState({
      password: "0242801719",
    });
  }
  
submit(){
    console.log({
      name: "Orison Tetteh",
      email: "orisontetteh@gmail.com",
      password: "0242801719",
    });
}

  render() {
    return (
      <div id="container">
        <h3 id="sign-up">Sign Up</h3>
        <h3 className="label">Full Name</h3>
        <input
          type="text"
          className="input"
          value={this.state.name}
          onChange={() => this.nameHandler()}
        />
        <h3 className="label-email">Email</h3>
        <input
          type="email"
          className="input-email"
          value={this.state.email}
          onChange={() => this.emailHandler()}
        />
        <h3 className="label-password">Password</h3>
        <input
          type="password"
          className="input-password"
          value={this.state.password}
          onChange={() => this.passwordHandler()}
        />
        <button onClick={() => this.submit()}>Submit</button>
      </div>

    );
  }
}

export default ClassForm