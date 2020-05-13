import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: "Blabla", likesCount: 11 },
        { id: 4, message: "Dada", likesCount: 11 },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
      ],
      newMessageBody: "",
    },
    sidebar: [],
  },
  _callSubscriber() {},

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.profileReducer = profileReducer(this._state.profilePage, action)
    this._state.dialogsReducer = dialogsReducer(this._state.dialogsPage, action)

    this._callSubscriber(this._state)
  },
}

export default store
