import React from "react"
import ReactDOM from "react-dom"

const { default: profileReducer, addPostActionCreator, deletePost } = require("./profile-reducer")

let state = {
  posts: [
    { id: 0, message: "Hi, how are you?", likesCount: 12 },
    { id: 1, message: "It's my first post", likesCount: 11 },
    { id: 2, message: "Blabla", likesCount: 11 },
    { id: 3, message: "Dada", likesCount: 11 },
  ],
}

it("New Post Should Be Added", () => {
  //1. Test data
  let action = addPostActionCreator("Test adding posts")

  //2. Action
  let newState = profileReducer(state, action)

  //3. Expectation
  expect(newState.posts.length).toBe(5)
})

it("Check value", () => {
  //1. Test data
  let action = addPostActionCreator("Test adding posts")

  //2. Action
  let newState = profileReducer(state, action)

  //3. Expectation
  expect(newState.posts[4].message).toBe("Test adding posts")
})

it("Deleting", () => {
  //1. Test data
  let action = deletePost(3)

  //2. Action
  let newState = profileReducer(state, action)

  //3. Expectation
  expect(newState.posts.length).toBe(3)
})

it("After Deleting Length Shouldn't be changed if id not correct", () => {
  //1. Test data
  let action = deletePost(33)

  //2. Action
  let newState = profileReducer(state, action)

  //3. Expectation
  expect(newState.posts.length).toBe(4)
})
