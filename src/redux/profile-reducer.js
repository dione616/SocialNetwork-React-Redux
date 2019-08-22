const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export  const profileReducer=(state,action)=>{
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        text: state.newPostText,
        like: 10,
      }
      state.posts.unshift(newPost)//add at begin
      state.newPostText = ''
      return state
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText
      return state
    default:
      return state
  }
}

export const addPostActionCreater = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text
})

export default profileReducer