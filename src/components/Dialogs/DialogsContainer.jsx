import React from "react"
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs"
import { connect } from "react-redux"

let mapStateToProps = (state) => {
  return {
    //rerender Dialogs only if dialogsPage changed
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

let DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs)

export default DialogsContainer
