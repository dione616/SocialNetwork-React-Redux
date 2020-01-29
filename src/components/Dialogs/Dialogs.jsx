import React from "react"
import classes from "./Dialogs.module.css"
import Message from "./Message/Message"
import DialogItem from "./DialogItem/DialogItem"

const Dialogs = props => {
  let state = props.dialogsPage
  let dialogsElements = state.dialogs.map(el => {
    const { id, name } = el
    return <DialogItem name={name} key={id} id={id} />
  })
  let messagesElements = state.messages.map(el => {
    return <Message message={el.message} key={el.id} />
  })

  let newMessageBody = state.newMessageBody

  let newMessageElement = React.createRef()

  let onSendMessageClick = () => {
    props.sendMessage()
  }
  let onNewMessageChange = e => {
    let body = e.target.value
    props.updateNewMessageBody(body)
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea
            ref={newMessageElement}
            value={newMessageBody}
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={onNewMessageChange}
            placeholder="Add New Message"
          ></textarea>
          <button onClick={onSendMessageClick}>Add post</button>
        </div>
      </div>
    </div>
  )
}
export default Dialogs
