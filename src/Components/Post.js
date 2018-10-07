import React from 'react';
import ChangeDashboardWidget from './ChangeDashboardWidget';

const Post = ({post}) => {
  const {content, timestamp} = post;

  return (
    <div className="post">

      <p>{content}</p>
      <ChangeDashboardWidget />
    </div>

  )
}

export default Post;