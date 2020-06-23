import React, { Component } from "react"
import Header from "./Header"
import { connect } from "react-redux"
import { getAuthData } from "../../redux/auth-reducer"
import { logout } from "../../redux/auth-reducer"

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getAuthData()
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

export default connect(mapStateToProps, { getAuthData, logout })(HeaderContainer)
