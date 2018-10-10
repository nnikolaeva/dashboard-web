import React, { Component } from 'react';

import { Button, FormControl, FormGroup } from "react-bootstrap";

class NewPost extends Component {
  state = {
    content: "",
    
  }

  handleChangeContent = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleCreate = () => {
    this.props.create(this.state.content);
    this.props.close()
  }
  
  render () {
    return (
      <div className="post">
      
      <div className="post-item">
      <FormGroup className="update-content" controlId="content">
      <FormControl 
      componentClass="textarea"
      value={this.state.content}
      onChange={this.handleChangeContent}/>
      <Button className="post-btn" bsStyle="link" onClick={this.handleCreate}>Create</Button>
      <Button className="post-btn" bsStyle="link" onClick={this.props.close}>Cancel</Button>
      </FormGroup> 
      </div>
      </div>

      )  
  }
  
}

export default NewPost;