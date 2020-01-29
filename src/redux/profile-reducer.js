const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
  posts: [
    { id: 0, message: "hi1", like: 15 },
    { id: 1, message: "hi2", like: 25 },
    { id: 2, message: "hi3", like: 35 },
    { id: 3, message: "hi4", like: 215 }
  ],
  newPostText: ""
}
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        like: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      } /* create copy of old state (shalow copy)*/
    }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      } /* create old state (shalow copy)*/
    //new text is primitive so no needing to deep copy

    default:
      return state
  }
}

//create action creators
export const addPostActionCreater = () => ({ type: ADD_POST })
export const updateNewPostTextAcionCreate = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})

export default profileReducer
