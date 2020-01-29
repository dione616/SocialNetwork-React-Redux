import React from "react"
import {
  sendMessageAC,
  updateNewMessageBodyAC
} from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs"
import { connect } from "react-redux"

let mapStateToProps = state => {
  /*created deep copy in reducer so rerendering*/
  return { dialogsPage: state.dialogsPage }
}
let mapDispatchToProps = dispatch => {
  return {
    updateNewMessageBody: body => {
      dispatch(updateNewMessageBodyAC(body))
    },
    sendMessage: () => {
      dispatch(sendMessageAC())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer
