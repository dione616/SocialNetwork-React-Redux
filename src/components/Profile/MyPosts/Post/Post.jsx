import React from "react"
import classes from "./Post.module.css"

const Post = props => {
  return (
    <div className={classes.content}>
      <div className={classes.item}>
        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="" />
        {props.message}
        <div className="">
          <span>{props.like} </span>❤️
        </div>
      </div>
    </div>
  )
}

export default Post
