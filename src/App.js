import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";

const App = props => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              dPage={props.state.dialogsPage}
              addMessage={props.addMessage}
              updateNewMessageText={props.updateNewMessageText}
            />
          )}
        />
        <Route
          path="/friends"
          render={() => <Friends state={props.state.friendsPage} />}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
            />
          )}
        />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  );
};

export default App;
