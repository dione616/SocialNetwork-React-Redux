import React from "react"
import "./App.css"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import Profile from "./components/Profile/Profile"
import { Route } from "react-router-dom"
import Friends from "./components/Friends/Friends"
import UsersConstainer from "./components/Users/UsersConstainer"

const App = props => {
  return (
    <div className="app-wrapper">
      <Header /> <Navbar />
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/users" render={() => <UsersConstainer />}></Route>
        <Route
          path="/friends"
          render={() => <Friends state={props.state.friendsPage} />}
        />
      </div>
    </div>
  )
}

export default App
