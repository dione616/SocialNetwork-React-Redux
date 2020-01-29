const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

let initialState = {
  users:[ ]
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user,followed: true }
          }
          return user;
        })
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user,followed: false }
          }
          return user;
        })
      }
    }
    case SET_USERS: {
      return { ...state, users: [ ...state.users, ...action.users ]}
  }
    default:
      return state
  }
}

//create action creators
export const followAC = (userId) => ({type: FOLLOW, userId })
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({type: SET_USERS, users })

export default userReducer
