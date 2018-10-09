import React, { Component } from 'react';
import App from '../App';
import Login from './Login';
import $ from 'jquery';

const BASE_URL = 'http://localhost:8080';

class Main extends Component {
  state = {
    userName: ""
  }

  handleLogin = (params) => {
    $.ajax({
      url : BASE_URL+ "/rest/validate",
      type : 'POST',
      data: JSON.stringify(params),
      contentType: 'json'
    }).then(() => {
     this.getCurrentUser();
    });
  }

  getCurrentUser = () => {
  $.getJSON( BASE_URL + "/rest/sessionuser", ( json ) => {
    console.log(json);
    localStorage.setItem("isUserLogged", "logged");
    this.setState({userName: json['name']});
  });
  }

  render () {
    console.log(localStorage);
  if (!localStorage.getItem("isUserLogged")) {
    return (
      <Login handleLogin={this.handleLogin}/>

      )
  }

    return (
      <App userName={this.state.userName}/>
      )
   
  }

  

}

export default Main;