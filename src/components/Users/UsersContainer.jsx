import React, { Component } from "react"
import { connect } from "react-redux"
import { follow, unfollow, setCurrentPage, toggleFollowing, requestUsers } from "../../redux/users-reducer"
import Users from "./Users"
import Loader from "../commons/Proloader/Loader"
import withAuthRedirect from "../../hoc/withAuthRedirect"
import { compose } from "redux"
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from "../../redux/users-selectors"

class UsersContainer extends Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (page) => {
    this.props.requestUsers(page, this.props.pageSize)
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
          followingInProgress={this.props.followingInProgress}
        />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

export default compose(
  /* withAuthRedirect, */
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowing,
    requestUsers,
  })
)(UsersContainer)
