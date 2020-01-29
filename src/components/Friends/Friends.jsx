import React from "react"
import classes from "./Friends.module.css"
import SingleFriend from "./SingleFriend/SingleFriend"

const Friends = props => {
  let friendElement = props.state.friends.map(friend => {
    return <SingleFriend info={friend} />
  })
  return (
    <div>
      <h2>Friend List</h2>
      <div className={classes.friendList}>{friendElement}</div>
    </div>
  )
}
export default Friends
