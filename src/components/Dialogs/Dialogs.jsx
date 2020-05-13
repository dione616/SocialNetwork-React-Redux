import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"

const Dialogs = (props) => {
  let state = props.dialogsPage

  let dialogs = state.dialogs.map((d, i) => <DialogItem key={i} name={d.name} id={d.id} />)
  let messages = state.messages.map((m, i) => <Message key={i} message={m.message} />)
  let newMessageBody = state.newMessageBody

  let onSendMessageClick = () => {
    props.sendMessage()
  }

  let onMessageChange = (e) => {
    let body = e.target.value
    props.updateNewMessageBody(body)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogs}</div>
      <div className={s.messages}>{messages}</div>
      <div>
        <div>
          <textarea onChange={onMessageChange} value={newMessageBody} placeholder="Enter message" cols="30" rows="10" />
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
