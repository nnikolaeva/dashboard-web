import React, { Component } from 'react';
import Post from './Post';
import { Button } from "react-bootstrap";


class Dashboard extends Component {
  render() {

    return (
        <div className="dashboard-container">
        <div className="all-posts-control">
      <Button className="create-post-btn" bsStyle="link">New Post</Button>
      </div>
        <div className="post-container">
          {this.props.posts.map((post) => {return <Post key={post.id} post={post} dashboards={this.props.dashboards} handleDelete={this.props.handleDelete} handleUpdatePost={this.props.handleUpdatePost} handlePin={this.props.handlePin}/>}) }
        </div>
        </div>
      )
  }
}

export default Dashboard;