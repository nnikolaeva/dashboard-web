import React, { Component } from 'react';
import ChangeDashboardWidget from './ChangeDashboardWidget';
import { Button, FormControl, FormGroup } from "react-bootstrap";
//<ChangeDashboardWidget dashboards={dashboards} handleMove={handleMove} post_id={post.id} />
//<p className="post-info">{moment.unix(timestamp).format("MM/DD/YY")}</p>
class Post extends Component {
  state = {
    content: "",
    editMode: false
  }
  
  handleEdit = (value) => {
    this.setState({ editMode: true, content: value });
  }


  handleChangeContent = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleUpdate = () => {
    this.setState({
      editMode: false
    });
    this.props.handleUpdatePost(this.props.post.id, this.state.content);
  }

  handleCancelUpdate = () => {
    this.setState({
      editMode: false
    });
  }

  
  render () {
    const {post, dashboards, handleDelete, handleUpdatePost, handlePin} = this.props;
    const {content, timestamp} = post;

    var postContentElement = (<p className="post-content">{content}</p>);
    if (this.state.editMode) {
      postContentElement = (<FormGroup className="update-content" controlId="content">
        <FormControl 
        componentClass="textarea"
        value={this.state.content}
        onChange={this.handleChangeContent}/>
        <Button className="post-btn" bsStyle="link" onClick={this.handleUpdate}>Update</Button>
        <Button className="post-btn" bsStyle="link" onClick={this.handleCancelUpdate}>Cancel</Button>
        </FormGroup>);
    }


    return (
    <div className="post">
      <div className="post-controls">
      <Button className="post-btn" bsStyle="link" >Move</Button>
      <Button className="post-btn" bsStyle="link" onClick={(postToPin) => handlePin(post)} >Pin</Button>
      <Button className="post-btn" bsStyle="link" onClick={(value) => this.handleEdit(content)}>Edit</Button>
      <Button className="post-btn" bsStyle="link" onClick={(postId) => handleDelete(post.id)} >Delete</Button>
      </div>
      <div className="post-item">
      {postContentElement}
      
      <p className="post-info">{"username"}</p>
      </div>
      </div>

  )  
  }
  
}

export default Post;