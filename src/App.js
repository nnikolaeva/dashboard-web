import React, { Component } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Settings from './Components/Settings';
import UserDashboard from './Components/UserDashboard';
import Login from './Components/Login';
import $ from 'jquery';

const BASE_URL = 'http://localhost:8080';

const posts = [
  {"id": 1, "content": "test", "timestamp": 1537811000, "priority": 1, "user": {"name": "nn"}},
  {"id": 2, "content": "test2", "timestamp": 1537811001, "priority": 1, "user": {"name": "mm"}},
  {"id": 3, "content": "test3", "timestamp": 1537811002, "priority": 1, "user": {"name": "pp"}}
];

const dashboards = [
  {"id": 1, "name" : "kitchenDash"},
  {"id": 2, "name" : "bedroomDash"},  

];

class App extends Component {

  state = {
    posts: posts,
    userName: "",
    dashboards: []
  }

  componentDidMount() {
    $.getJSON( BASE_URL + "/rest/post", ( json ) => {
      this.setState({posts: json["posts"]});
    });

    $.getJSON( BASE_URL + "/rest/dashboard", ( json ) => {
      for (const d of json["dashboards"]) {
        $.getJSON( BASE_URL + "/rest/post?dashboardId=" + d.id, ( json ) => {
          this.setState((state) => ({
            dashboards: [...state.dashboards, {"name": d.name, posts: json["posts"]}]
          }))
      });
      }
    });
  }

  getCurrentUser = () => {
  $.getJSON( BASE_URL + "/rest/sessionuser", ( json ) => {
    console.log(json);
    this.setState({userName: json['name']});
  });
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

  render() {
    console.log(this.state);
    if (this.state.userName === "") {
      return (
        <Login handleLogin={this.handleLogin}/>
        )
    }
    return (
      <div className="App">
        <header className="App-header">
          <div className="dashboard-link-container">
          <div className="">
            <Link
            to='/'
            className=''
            >{"Dashboard"}
            </Link>
          </div>
          <div className="">
            <Link
            to='/settings'
            className=''
            >{"Settings"}
            </Link>
          </div>
          {this.state.dashboards.map((dash) => {return <div><Link to={"/dash/" + dash.name}>{dash.name}</Link></div>})}
          </div>
        </header>
        <div className="main-container">
          <Route exact path='/' render={() => <Dashboard posts={this.state.posts} />} />
          <Route path='/settings' component={Settings} />
          {this.state.dashboards.map((d) => {
            return <Route path='/dash/:name' render={() => <UserDashboard posts={d.posts} />} />
          })}
          
        </div>


      </div>
    );
  }
}

export default App;
