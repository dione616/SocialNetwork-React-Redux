const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: "Hi how'r you", like: 10},
                {id: 2, text: "I like proggraming", like: 11},
                {id: 3, text: "Hi how'r you", like: 155},
                {id: 4, text: "Hello men", like: 622},
                {id: 1, text: "Hi how'r you", like: 10},
                {id: 2, text: "I like proggraming", like: 11},
                {id: 3, text: "Hi how'r you", like: 155},
                {id: 4, text: "Hello men", like: 622},
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Vitalii"},
                {id: 2, name: "Sasha"},
                {id: 3, name: "Dasha"},
                {id: 4, name: "Anna"},
                {id: 5, name: "Vitalii"},
                {id: 6, name: "Sasha"},
                {id: 7, name: "Dasha"},
                {id: 8, name: "Anna"},
            ],
            messages: [
                {id: 1, message: "Helloooo World"},
                {id: 2, message: "Hi"},
                {id: 3, message: "Whats up"},
                {id: 4, message: "YO Yo Yo"},
            ],
            newMessageText: "",
        },
        friendsPage: {
            friend: [
                {
                    id: 1,
                    name: "Bill1",
                    image:
                        "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/2018/womensprefer.jpg",
                },
                {
                    id: 2,
                    name: "Bill2",
                    image:
                        "https://mediaslide-europe.storage.googleapis.com/micha/pictures/55/1807/profile-1553099524-42a8959675ed6ac8062948d3a82534e2.jpg",
                },
                {
                    id: 3,
                    name: "Bill3",
                    image:
                        "https://www.cocoleni.com/content/wp-content/uploads/2018/12/square_faces.jpg",
                },
                {
                    id: 4,
                    name: "Bill4",
                    image:
                        "https://www.cocoleni.com/content/wp-content/uploads/2018/12/square_faces.jpg",
                },
                {
                    id: 5,
                    name: "Bill5",
                    image:
                        "https://www.cocoleni.com/content/wp-content/uploads/2018/12/square_faces.jpg",
                },
                {
                    id: 6,
                    name: "Bill6",
                    image:
                        "https://www.cocoleni.com/content/wp-content/uploads/2018/12/square_faces.jpg",
                },
                {
                    id: 7,
                    name: "Bill7",
                    image:
                        "https://www.cocoleni.com/content/wp-content/uploads/2018/12/square_faces.jpg",
                },
                {
                    id: 8,
                    name: "Bill8",
                    image:
                        "https://www.cocoleni.com/content/wp-content/uploads/2018/12/square_faces.jpg",
                },
            ],
        },
    },
    _callSubscriber() {
        console.log('Changed')
    },

    getState() {
        return this._state
    },
    subscribe(obsserver) {
        this._callSubscriber = obsserver
    },
    dispatch(action) {
        if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                text: this._state.profilePage.newPostText,
                like: 10,
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)

        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 55,
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber(this._state)
        }
    }

}
export const addPostActionCreater = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (textMessage) =>({//updateNewMessageTextActionCreator why yellow????????
    type: UPDATE_NEW_MESSAGE_TEXT, newText: textMessage
})
export default store
