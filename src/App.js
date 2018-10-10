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
import { Navbar, Nav, NavItem } from "react-bootstrap";

const BASE_URL = 'http://localhost:8080';

class App extends Component {

  state = {
    posts: [],
    dashboards: []
  }

  componentDidMount() {
      console.log("fetch");

    $.getJSON( BASE_URL + "/rest/post", ( json ) => {
      this.setState({posts: json["posts"]});
    });

    $.getJSON( BASE_URL + "/rest/dashboard", ( json ) => {
      for (const d of json["dashboards"]) {
        $.getJSON( BASE_URL + "/rest/post?dashboardId=" + d.id, ( json ) => {
          this.setState((state) => ({
            dashboards: [...state.dashboards, {"name": d.name, "id": d.id, posts: json["posts"]}],

          }))
      });
      }
    });
    
  }

  fetchAllPosts = () => {
    console.log("fetch");
    $.getJSON( BASE_URL + "/rest/post", ( json ) => {
      this.setState({posts: json["posts"]});
    });
  }

  getCurrentUser = () => {
  $.getJSON( BASE_URL + "/rest/sessionuser", ( json ) => {
    console.log(json);
    this.setState({userName: json['name']});
  });
  }


  handleDelete = (postId) => {
    $.ajax({
      url : BASE_URL + "/rest/post?id=" + postId,
      type : 'DELETE'
    }).then(
      this.setState((state) => ({
      posts: state.posts.filter((post) => post.id !== postId)
    }))
    );
  }

  handleUpdatePost = (postId, newContent) => {

    var params = {id: postId, content: newContent};
    
    $.ajax({
      url : BASE_URL + "/rest/post",
      type : 'POST',
      data: JSON.stringify(params),
      contentType: 'json',
    }).then(() => {
      const postToUpdate = this.state.posts.find((p) => p.id === postId);
      postToUpdate.content = newContent;
      this.setState((state) => ({
        posts: state.posts
      }));
    });
    
  }

  handlePin = (postToPin) => {
    console.log("post to pin: " + postToPin.content);
    $.ajax({
      url : BASE_URL + "/rest/pin",
      type : 'POST',
      data: JSON.stringify(postToPin),
      contentType: 'json',
    }).then(() => {
      this.fetchAllPosts();
    });
  }


  createNewPost = (value) => {
    
    const params = {content: value};
    $.ajax({
      url : BASE_URL + "/rest/post",
      type : 'POST',
      data: JSON.stringify(params),
      contentType: 'json'
    }).then(() => {
      console.log("ready to creare new post: " + value);
      this.fetchAllPosts();
    });
  }


  render() {
    return (
      <div className="App">


        <header className="App-header">
          
    <div className="dashboard-link-container">
          <div className="nav-item">
            <Link
            to='/'
            className=''
            >{"Dashboard"}
            </Link>
          </div>
          <div className="nav-item">
            <Link
            to='/settings'
            className=''
            >{"Settings"}
            </Link>
          </div>
          {this.state.dashboards.map((dash) => {return <div className="nav-item"><Link key={dash.name} to={"/dash/" + dash.name}>{dash.name}</Link></div>})}
          </div>
    
        </header>
        <div className="main-container">
          <Route exact path='/' 
            render={
              () => <Dashboard 
                      posts={this.state.posts}
                      dashboards={this.state.dashboards} 
                      handleDelete={this.handleDelete} 
                      handleUpdatePost={this.handleUpdatePost}
                      create={this.createNewPost}
                      handlePin={this.handlePin}/>}/>
          <Route path='/settings' component={Settings} />
          {this.state.dashboards.map((d) => {
            return <Route path='/dash/:name' render={(posts) => <UserDashboard posts={d.posts} />} />
          })}
          
        </div>


      </div>
    );
  }
}

export default App;
