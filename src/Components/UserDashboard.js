import React, { Component } from 'react';
import Post from './Post';


class UserDashboard extends Component {
  
  


  render() {
    return (
        <div className="dashboard-container">
        <div className="post-container">
          {this.props.posts.map((post) => {return <Post key={post.id} post={post} />}) }
          </div>
        </div>
      )
  }
}

export default UserDashboard;