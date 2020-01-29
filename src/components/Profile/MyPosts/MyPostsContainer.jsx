import React from "react"
import {
  addPostActionCreater,
  updateNewPostTextAcionCreate
} from "../../../redux/profile-reducer"
import MyPosts from "./MyPosts"
import { connect } from "react-redux"

const mapStateToProps = state => {
  return {
    /*created deep copy in reducer so rerendering*/
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = dispatch => {
  return {
    updateNewPostText: text => {
      let action = updateNewPostTextAcionCreate(text)
      dispatch(action)
    },
    addPost: () => {
      dispatch(addPostActionCreater())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
