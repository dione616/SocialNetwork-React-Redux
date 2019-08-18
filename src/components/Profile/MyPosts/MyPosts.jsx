import React from "react";
import classes from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
    let postsElements = props.posts.map(p => {
        return <Post message={p.text} like={p.like}/>;
    }); /*using map to show all data to post from posts[]*/
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'})
        //let text = newPostElement.current.value='';
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);
    };
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div className={classes.addPost}>
                <div>
          <textarea
              value={props.newPostText}
              ref={newPostElement}
              onChange={onPostChange}
          />
                </div>
                <div className={classes.addBut}>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>{postsElements}</div>
        </div>
    );
};
export default MyPosts;
