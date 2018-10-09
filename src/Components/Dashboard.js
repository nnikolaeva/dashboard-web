import React, { Component } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import { Button } from "react-bootstrap";


class Dashboard extends Component {
  state = {
    newPostMode: false
  }

  

  openNewPostWindow = () => {
    this.setState({newPostMode: true});
  }

  closeNewPostWindow = () => {
    this.setState({newPostMode: false});
  }


  render() {
    console.log("props");
    console.log(this.props);

    return (
        <div className="dashboard-container">
        <div className="all-posts-control">
      <Button className="create-post-btn" bsStyle="link" onClick={this.openNewPostWindow} >New Post</Button>
      {this.state.newPostMode && <NewPost close={this.closeNewPostWindow} create={this.props.create} />}
      </div>
        <div className="post-container">
          {this.props.posts.map((post) => {return <Post key={post.id} post={post} dashboards={this.props.dashboards} handleDelete={this.props.handleDelete} handleUpdatePost={this.props.handleUpdatePost} handlePin={this.props.handlePin}/>}) }
        </div>
        </div>
      )
  }
}

export default Dashboard;