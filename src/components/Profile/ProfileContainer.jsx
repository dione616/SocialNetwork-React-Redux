import React, { Component } from "react"
import Profile from "./Profile"
import axios from "axios"
import { connect } from "react-redux"
import { setUserProfile } from "../../redux/profile-reducer"
import { withRouter } from "react-router-dom"

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, { withCredentials: true })
      .then((response) => {
        this.props.setUserProfile(response.data)
      })
  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

let withData = withRouter(ProfileContainer)

export default connect(
  mapStateToProps,
  { setUserProfile }
)(withData)
