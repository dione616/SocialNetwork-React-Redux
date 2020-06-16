const SEND_MESSAGE = "SEND-MESSAGE"

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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody

      return { ...state, messages: [...state.messages, { id: 6, message: body }] }
    }

    default:
      return state
  }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer
