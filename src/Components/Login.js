import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";



class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    var params = {name: this.state.name, password: this.state.password};

    this.props.handleLogin(params);
  }


  render() {
    return (
      
      <div className="Login">
      <form onSubmit={this.handleSubmit}>
      <FormGroup controlId="name" bsSize="large">
      <ControlLabel>Name</ControlLabel>
      <FormControl
      autoFocus
      type="text"
      value={this.state.name}
      onChange={this.handleChange}
      />
      </FormGroup>
      <FormGroup controlId="password" bsSize="large">
      <ControlLabel>Password</ControlLabel>
      <FormControl
      value={this.state.password}
      onChange={this.handleChange}
      type="password"
      />
      </FormGroup>
      <Button
      block
      bsSize="large"
      type="submit"
      >
      Login
      </Button>
      </form>
      </div>
      );
    
  }
}
export default Login;