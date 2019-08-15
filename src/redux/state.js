import {rerenderEntireTree} from "../render";

let state = {
    profilePage:{
        posts: [
            {id: 1, text: 'Hi how\'r you', like: 10},
            {id: 2, text: 'I like proggraming', like: 11},
            {id: 3, text: 'Hi how\'r you', like: 155},
            {id: 4, text: 'Hello men', like: 622},
            {id: 1, text: 'Hi how\'r you', like: 10},
            {id: 2, text: 'I like proggraming', like: 11},
            {id: 3, text: 'Hi how\'r you', like: 155},
            {id: 4, text: 'Hello men', like: 622},
        ],
        newPostText:'write down'
    },
    dialogsPage:{
        dialogs: [
            {id: 1, name: 'Vitalii'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Dasha'},
            {id: 4, name: 'Anna'},
            {id: 5, name: 'Vitalii'},
            {id: 6, name: 'Sasha'},
            {id: 7, name: 'Dasha'},
            {id: 8, name: 'Anna'},
        ],
        messages: [
            {id: 1, message: 'Helloooo World'},
            {id: 2, message: 'Hi'},
            {id: 3, message: 'Whats up'},
            {id: 4, message: 'YO Yo Yo'},
        ]
    },
    friendsPage:{
        friend:[
            {id:1,name:'Bill1',image:'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/2018/womensprefer.jpg'},
            {id:2,name:'Bill2',image:'https://mediaslide-europe.storage.googleapis.com/micha/pictures/55/1807/profile-1553099524-42a8959675ed6ac8062948d3a82534e2.jpg'},
            {id:3,name:'Bill3',image:'https://www.cocoleni.com/content/wp-content/uploads/2018/12/square_faces.jpg'},
            {id:4,name:'Bill4',image:'https://www.cocoleni.com/content/wp-content/uploads/2018/12/square_faces.jpg'},
            {id:5,name:'Bill5',image:'https://www.cocoleni.com/content/wp-content/uploads/2018/12/square_faces.jpg'},
            {id:6,name:'Bill6',image:'https://www.cocoleni.com/content/wp-content/uploads/2018/12/square_faces.jpg'},
            {id:7,name:'Bill7',image:'https://www.cocoleni.com/content/wp-content/uploads/2018/12/square_faces.jpg'},
            {id:8,name:'Bill8',image:'https://www.cocoleni.com/content/wp-content/uploads/2018/12/square_faces.jpg'}
        ]
    }
}

export let addPost=()=>{
    let newPost={
        id:5,
        text:state.profilePage.newPostText,
        like:10
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText=''
    rerenderEntireTree(state)
}

export let addMessage=(textMessage)=>{
    let newMessage={
        id:55,
        message:textMessage
    }
    state.dialogsPage.messages.push(newMessage)
    rerenderEntireTree(state)
}

export let updateNewPostText=(newText)=>{
    state.profilePage.newPostText=newText
    rerenderEntireTree(state)
}

export default state