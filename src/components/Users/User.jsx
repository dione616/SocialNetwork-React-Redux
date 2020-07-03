import React from "react"
import s from "./Users.module.css"
import userPhoto from "../../assets/logo.jpg"
import { NavLink } from "react-router-dom"

const User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div className={s.user}>
      <div>
        <div className={s.image}>
          <NavLink to={`/profile/${user.id}`}>
            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto} alt="alt" />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id)
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id)
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className="user_info">
        <div>Name: {user.name}</div>
        <div>Status: {user.status}</div>
      </div>
      <div />
    </div>
  )
}

export default User
