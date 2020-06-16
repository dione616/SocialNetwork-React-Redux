import React from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import { Field, reduxForm } from "redux-form"
import { required, maxLengthCreator } from "../../../utils/validator/validators"
import Textarea from "../../commons/Proloader/FormsControls/FormsControls"

const maxLength500 = maxLengthCreator(500)

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id} />
  ))

  const addNewPost = (values) => {
    props.addPost(values.newPostText)
    values.newPostText = ""
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddPostReduxForm onSubmit={addNewPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
}

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} validate={[required, maxLength500]} name="newPostText" placeholder="Enter text" />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddPostReduxForm = reduxForm({ form: "PostAddMessageForm" })(AddPostForm)

export default MyPosts
