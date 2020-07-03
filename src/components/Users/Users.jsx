import React from "react"
import s from "./Users.module.css"
import userPhoto from "../../assets/logo.jpg"
import { NavLink } from "react-router-dom"
import axios from "axios"
import { usersAPI } from "../../api/api"
import Pagination from "../commons/Pagination/Pagination"
import User from "./User"

const Users = ({ currentPage, totalUsersCount, onPageChanged, pageSize, ...props }) => {
  return (
    <div>
      <Pagination
        onPageChanged={onPageChanged}
        currentPage={currentPage}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      {props.users.map((user) => (
        <User
          key={user.id}
          user={user}
          followingInProgress={props.followingInProgress}
          unfollow={props.unfollow}
          follow={props.follow}
        />
      ))}
    </div>
  )
}

export default Users
