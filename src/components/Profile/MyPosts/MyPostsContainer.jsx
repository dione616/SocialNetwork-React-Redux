import { updateNewPostActionCreator, addPostActionCreator } from "../../../redux/profile-reducer"
import MyPosts from "./MyPosts"
import { connect } from "react-redux"

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    },
  }
}

const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts)

export default MyPostsContainer
