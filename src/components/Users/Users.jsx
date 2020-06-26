import React from "react"
import s from "./Users.module.css"
import userPhoto from "../../assets/logo.jpg"
import { NavLink } from "react-router-dom"
import axios from "axios"
import { usersAPI } from "../../api/api"

const Users = (props) => {
  console.log(props)
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div className={s.pages}>
        {pages.map((page) => (
          <span
            key={page}
            onClick={() => {
              props.onPageChanged(page)
            }}
            className={props.currentPage === page ? s.selectedPage : s.page}
          >
            {page}
          </span>
        ))}
      </div>
      {props.users.map((user) => (
        <div className={s.user} key={user.id}>
          <div>
            <div className={s.image}>
              <NavLink to={`/profile/${user.id}`}>
                <img
                  src={user.photos.small != null ? user.photos.small : userPhoto}
                  className={s.userPhoto}
                  alt="alt"
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === user.id)}
                  onClick={() => {
                    props.unfollow(user.id)
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === user.id)}
                  onClick={() => {
                    props.follow(user.id)
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className="user_info">
            <div>{user.name}</div>
            <div>{user.status}</div>
          </div>
          <div className="user_info">
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </div>
          <div />
        </div>
      ))}
    </div>
  )
}

export default Users
