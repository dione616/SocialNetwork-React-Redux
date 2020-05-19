import React, { Component } from "react"
import { connect } from "react-redux"
import axios from "axios"
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
} from "../../redux/users-reducer"
import Users from "./Users"

import Loader from "../commons/Proloader/Loader"

class UsersContainer extends Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    /* if (this.props.users.length === 0) {} */
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${
          this.props.pageSize
        }`,
        { withCredentials: true, headers: { "API-KEY": "78c66b05-e969-49e4-ab98-a046293b70bf" } }
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
        this.props.toggleIsFetching(false)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (page) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(page)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {
        withCredentials: true,
        headers: { "API-KEY": "78c66b05-e969-49e4-ab98-a046293b70bf" },
      })
      .then((response) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Loader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          isFetching={this.props.isFetching}
        />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}

export default connect(
  mapStateToProps,
  {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
  }
)(UsersContainer)
