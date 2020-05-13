const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"

let initialState = {
  dialogs: [
    { id: 1, name: "Vitalii" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Alena" },
    { id: 4, name: "Alex" },
    { id: 5, name: "Maria" },
    { id: 6, name: "Valera" },
  ],

  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How r u?" },
    { id: 3, message: "Yo0" },
    { id: 4, message: "Yo1" },
    { id: 5, message: "Yo2" },
  ],
  newMessageBody: "",
}

const dialogsReducer = (state = initialState, action) => {
  let stateCopy

  switch (action.type) {
    case SEND_MESSAGE: {
      let body = state.newMessageBody

      return { ...state, newMessageBody: "", messages: [...state.messages, { id: 6, message: body }] }
    }

    case UPDATE_NEW_MESSAGE_BODY: {
      return { ...state, newMessageBody: action.body }
    }

    default:
      return state
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: text })

export default dialogsReducer
