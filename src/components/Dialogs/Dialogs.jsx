import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import { Redirect } from "react-router-dom"
import { Field, reduxForm } from "redux-form"
import Textarea from "../commons/Proloader/FormsControls/FormsControls"
import { required, maxLengthCreator } from "../../utils/validator/validators"

const maxLength500 = maxLengthCreator(500)

const Dialogs = (props) => {
  let state = props.dialogsPage

  let dialogs = state.dialogs.map((d, i) => <DialogItem key={i} name={d.name} id={d.id} />)
  let messages = state.messages.map((m, i) => <Message key={i} message={m.message} />)

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
    values.newMessageBody = ""
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogs}</div>
      <div className={s.messages}>{messages}</div>
      <AddMessageReduxForm onSubmit={addNewMessage} />
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLength500]}
          name="newMessageBody"
          placeholder="Enter message"
        />
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageReduxForm = reduxForm({ form: "DialogAddMessageForm" })(AddMessageForm)

export default Dialogs
