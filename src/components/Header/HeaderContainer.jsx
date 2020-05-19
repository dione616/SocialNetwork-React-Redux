import React, { Component } from "react"
import Header from "./Header"
import axios from "axios"
import { connect } from "react-redux"
import { setUserData, setUserImg } from "../../redux/auth-reducer"

class HeaderContainer extends Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        this.props.setUserData(id, email, login)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`).then((res) => {
          this.props.setUserImg(res.data.photos.small)
        })
      }
    })
  }
  render() {
    return <Header {...this.props} />
  }
}

let mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

export default connect(
  mapStateToProps,
  { setUserData, setUserImg }
)(HeaderContainer)
