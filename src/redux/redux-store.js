import { createStore, combineReducers } from "redux"
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"
import usersReducer from "./usersReducer"

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  friendsPage: sidebarReducer,
  usersPage: usersReducer
})

let store = createStore(reducers)

export default store
