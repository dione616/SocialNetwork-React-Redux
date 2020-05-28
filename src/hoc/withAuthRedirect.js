import React from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"

let mapStateToPropsFor = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Redirect to={"/login"} />
      }
      return <Component {...this.props} />
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsFor)(RedirectComponent)
  return ConnectedAuthRedirectComponent
}

export default withAuthRedirect
