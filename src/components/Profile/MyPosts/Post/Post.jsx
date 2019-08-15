import React from 'react';
import classes from './Post.module.css';

const Post = props => {
  //debugger;

  return (
    <div className={classes.item}>
      <img
        src='http://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/orig'
        alt=''
      />
      {props.message}
      <div>
        <span>Like {props.like}</span>
      </div>
    </div>
  );
};

export default Post;
