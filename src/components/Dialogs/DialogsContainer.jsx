import React from "react"
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import withAuthRedirect from "../../hoc/withAuthRedirect"
import { compose } from "redux"

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
  }
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withAuthRedirect
)(Dialogs)
