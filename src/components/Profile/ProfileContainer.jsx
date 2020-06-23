import React, { Component } from "react"
import Profile from "./Profile"
import { connect } from "react-redux"
import { getProfile, getUserStatus, updateUserStatus } from "../../redux/profile-reducer"
import { withRouter } from "react-router-dom"
import { Redirect } from "react-router-dom"
import withAuthRedirect from "../../hoc/withAuthRedirect"
import { compose } from "redux"

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
    }
    this.props.getProfile(userId)

    this.props.getUserStatus(userId)
  }
  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateUserStatus={this.props.updateUserStatus}
        />
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  }
}

export default compose(
  connect(mapStateToProps, { getProfile, getUserStatus, updateUserStatus }),
  withRouter
  /* withAuthRedirect */
)(ProfileContainer)
