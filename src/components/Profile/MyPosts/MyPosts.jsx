import React from 'react';
import classes from './MyPost.module.css';
import Post from './Post/Post';

const MyPosts = props => {
    let postsElements = props.posts.map(p => {
        return <Post message={p.text} like={p.like}/>
    })/*using map to show all data to post from posts[]*/
    let newPostElement=React.createRef()
    let addPost=()=>{
        props.addPost()
    }
    let onPostChange=()=>{
        let text=newPostElement.current.value
        props.updateNewPostText(text)
    }
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div className={classes.addPost}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div className={classes.addBut}>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
};
export default MyPosts;
