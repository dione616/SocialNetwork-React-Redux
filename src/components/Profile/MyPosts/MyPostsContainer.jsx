import { addPostActionCreator } from "../../../redux/profile-reducer"
import MyPosts from "./MyPosts"
import { connect } from "react-redux"

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText))
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
