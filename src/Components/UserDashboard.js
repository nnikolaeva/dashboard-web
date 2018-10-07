import React, { Component } from 'react';
import Post from './Post';


class UserDashboard extends Component {
  render() {
    return (
        <div className="dashboard-container">
          {this.props.posts.map((post) => {return <Post key={post.id} post={post} />}) }
        </div>
      )
  }
}

export default UserDashboard;