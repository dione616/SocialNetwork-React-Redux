import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 0, message: "hi1", like: 15 },
        { id: 1, message: "hi2", like: 25 },
        { id: 2, message: "hi3", like: 35 },
        { id: 3, message: "hi4", like: 215 }
      ],
      newPostText: "Add New Post"
    },
    dialogsPage: {
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
      newMessageBody: "Add New Message"
    },
    friendsPage: {
      friends: [
        {
          id: 0,
          name: "Alex",
          img:
            "https://cdn.dribbble.com/users/892911/screenshots/5569785/ddd.jpg"
        },
        {
          id: 1,
          name: "Dima",
          img:
            "https://cdn.dribbble.com/users/892911/screenshots/5569785/ddd.jpg"
        },
        {
          id: 2,
          name: "Victor",
          img:
            "https://cdn.dribbble.com/users/892911/screenshots/5569785/ddd.jpg"
        },
        {
          id: 3,
          name: "Vitalii",
          img:
            "https://cdn.dribbble.com/users/892911/screenshots/5569785/ddd.jpg"
        },
        {
          id: 4,
          name: "Maria",
          img:
            "https://cdn.dribbble.com/users/892911/screenshots/5569785/ddd.jpg"
        },
        {
          id: 0,
          name: "Alex",
          img:
            "https://cdn.dribbble.com/users/892911/screenshots/5569785/ddd.jpg"
        },
        {
          id: 1,
          name: "Dima",
          img:
            "https://cdn.dribbble.com/users/892911/screenshots/5569785/ddd.jpg"
        },
        {
          id: 2,
          name: "Victor",
          img:
            "https://cdn.dribbble.com/users/892911/screenshots/5569785/ddd.jpg"
        },
        {
          id: 3,
          name: "Vitalii",
          img:
            "https://cdn.dribbble.com/users/892911/screenshots/5569785/ddd.jpg"
        },
        {
          id: 4,
          name: "Maria",
          img:
            "https://cdn.dribbble.com/users/892911/screenshots/5569785/ddd.jpg"
        },
        {
          id: 0,
          name: "Alex",
          img:
            "https://cdn.dribbble.com/users/892911/screenshots/5569785/ddd.jpg"
        },
        {
          id: 1,
          name: "Dima",
          img:
            "https://cdn.dribbble.com/users/892911/screenshots/5569785/ddd.jpg"
        },
        {
          id: 2,
          name: "Victor",
          img:
            "https://cdn.dribbble.com/users/892911/screenshots/5569785/ddd.jpg"
        },
        {
          id: 3,
          name: "Vitalii",
          img:
            "https://cdn.dribbble.com/users/892911/screenshots/5569785/ddd.jpg"
        },
        {
          id: 4,
          name: "Maria",
          img:
            "https://cdn.dribbble.com/users/892911/screenshots/5569785/ddd.jpg"
        }
      ]
    }
  },
  _callSubscriber() {},

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  //dispatch actions
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

    //update our _state
    this._callSubscriber(this._state)
  }
}

export default store
window.state = store
