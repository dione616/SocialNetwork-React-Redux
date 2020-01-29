const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
  dialogs: [
    { id: 0, name: "Vitalii" },
    { id: 1, name: "Dima" },
    { id: 2, name: "Alex" }
  ],
  messages: [
    { id: 0, message: "Hi" },
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Yeah Boy" }
  ],
  newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return { ...state, newMessageBody: action.body }
    }
    case SEND_MESSAGE: {
      let body = state.newMessageBody
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
        newMessageBody: ""
      } //for new created message array add to end new object {id,message}
    }
    default:
      return state
  }
}

//action creators
export const sendMessageAC = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyAC = body => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
})

export default dialogsReducer
