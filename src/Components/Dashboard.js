import React, { Component } from 'react';
import Post from './Post';


class Dashboard extends Component {
  render() {
    return (
        <div className="dashboard-container">
        <button>
          {"New"}
        </button>
          {this.props.posts.map((post) => {return <Post key={post.id} post={post} />}) }
        </div>
      )
  }
}

export default Dashboard;