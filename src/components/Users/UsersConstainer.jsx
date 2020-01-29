import React from "react"
import { connect } from "react-redux"
import Users from "./Users.jsx"
import { followAC, unfollowAC, setUsersAC } from "../../redux/usersReducer.js"

let mapStateToProps = state => {
  return {
    users: state.usersPage.users
  }
}
let mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId))
    },
    unfollow: userId => {
      dispatch(unfollowAC(userId))
    },
    setUsers: users => {
      dispatch(setUsersAC(users))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
