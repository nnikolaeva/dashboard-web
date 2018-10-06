import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
          <p>nav</p>
        </header>
        <div className="main-container">
        
        </div>


      </div>
    );
  }
}

export default App;
