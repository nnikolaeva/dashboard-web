import React, { Component } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Settings from './Components/Settings';

const posts = [
  {"id": 1, "content": "test", "timestamp": 1537811000, "priority": 1, "user": {"name": "nn"}},
  {"id": 2, "content": "test2", "timestamp": 1537811001, "priority": 1, "user": {"name": "mm"}},
  {"id": 3, "content": "test3", "timestamp": 1537811002, "priority": 1, "user": {"name": "pp"}}
];

class App extends Component {
  state = {
    posts: posts
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="dashboard-link">
          <div className="open-search">
            <Link
            to='/'
            className=''
            >{"Dashboard"}
            </Link>
          </div>
          <div className="open-search">
            <Link
            to='/settings'
            className=''
            >{"Settings"}
            </Link>
          </div>
          </div>
        </header>
        <div className="main-container">
          <Route exact path='/' render={() => <Dashboard posts={this.state.posts} />} />
          <Route path='/settings' component={Settings} />
        </div>


      </div>
    );
  }
}

export default App;
