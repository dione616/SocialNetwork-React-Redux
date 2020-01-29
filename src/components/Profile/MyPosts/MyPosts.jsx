import React from "react"
import classes from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = props => {
  let postsElement = props.posts.map(p => {
    const { id, message, like } = p
    return <Post message={message} like={like} />
  })

  let newPostElement = React.createRef()

  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return (
    <div className={classes.content}>
      <h2>My Posts</h2>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          name=""
          id=""
          cols="30"
          rows="10"
          value={props.newPostText}
          placeholder="Add New Post"
        />
        <button onClick={onAddPost}>Add post</button>
        <button>Remove</button>
      </div>
      <div className={classes.posts}>{postsElement}</div>
    </div>
  )
}

export default MyPosts
//write to Project  NOte
//add textarea to messages
