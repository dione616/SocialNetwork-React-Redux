import React from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import { reduxForm, Field } from "redux-form"
import { Textarea } from "../../commons/FormsControl/FormsControl"
import { maxLengthCreator, required } from "../../../utils/validator"

const maxLength500 = maxLengthCreator(500)

const MyPosts = React.memo((props) => {
  //wrap with memo to prevent rerender loop
  let postsElements = [...props.posts]
    .reverse()
    .map((post) => <Post message={post.message} likesCount={post.likesCount} key={post.id} />)
  let onAddPost = (values) => {
    props.addPost(values.newPostText)
    values.newPostText = ""
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddPostReduxForm onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  )
})

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

const AddPostReduxForm = reduxForm({
  form: "PostAddMessageForm",
})(AddPostForm)

export default MyPosts
