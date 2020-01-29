import React from "react"
import classes from "./Users.module.css"
import * as axios from "axios"
import userPhoto from "../../assets/images/user.png"

let Users = props => {
  let getUsers=()=>{
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users/")
        .then(res => {
          props.setUsers(res.data.items)
        })
    }
  }


  return (
    <div>
      <button onClick={getUsers}>Load users</button>
      {props.users.map(user => (
        <div key={user.id}>
          <span>
            <div>
              <img
                className={classes.userPhoto}
                src={user.photos.small != null ? user.photos.small : userPhoto}
                alt=""
              />
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id)
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id)
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Users
