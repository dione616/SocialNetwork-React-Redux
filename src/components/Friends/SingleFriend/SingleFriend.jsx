import React from "react"
import classes from "./SingleFriend.module.css"

const SingleFriend = props => {
  return (
    <div className={classes.friendWrapper}>
      <div className={classes.friendAva}>
        <img src={props.info.img} alt="ava" />
      </div>
      <span className={classes.friendName}>{props.info.name}</span>
      <button className={classes.buttonMessage}>Write</button>
    </div>
  )
}
export default SingleFriend
