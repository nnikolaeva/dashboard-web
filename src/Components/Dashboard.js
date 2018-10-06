import React, { Component } from 'react';


class Dashboard extends Component {
  render() {
    return (
        <div>
          {this.props.posts.map((post) => {return <div>{post.content}</div>}) }
        </div>
      )
  }
}

export default Dashboard;