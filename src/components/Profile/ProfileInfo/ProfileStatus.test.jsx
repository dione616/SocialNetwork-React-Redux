import React from "react"
import { create } from "react-test-renderer"
import ProfileStatus from "./ProfileStatus"

describe("ProfileStatus Component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status={"Test-status"} />)
    const instance = component.getInstance() //экземпляр
    expect(instance.state.status).toBe("Test-status")
  })

})

test("/Check span?",()=>{
  const component=create(<ProfileStatus />)
  const root=component.root
  const span=root.findByType("span")
  expect(span).not.toBe(null)
})

test("/Check span Text?",()=>{
  const component=create(<ProfileStatus status={"Status test text"} />)
  const root=component.root
  const span=root.findByType("span")
  expect(span.children[1]).toBe('Status test text')
})

test("/After creation input must be null",()=>{
  const component=create(<ProfileStatus status={"Status test text"} />)
  const root=component.root
  expect(()=>{
    const input=root.findByType("input")
  }).toThrow()
})

test("/Input must be displayed in editMode",()=>{
  const component=create(<ProfileStatus status={"Bla Bla"} />)
  const root=component.root
  const span=root.findByType("span")
  span.props.onDoubleClick()
  const input=root.findByType("input")
  expect(input.props.value).toBe("Bla Bla")
})

test("/Callback",()=>{
  const mockCallback=jest.fn()//function which knows how many times it has called
  const component=create(<ProfileStatus status={"Bla Bla"} updateUserStatus={mockCallback} />)
  const instance=component.getInstance()
  instance.activateEditMode(false)
  expect(mockCallback.mock.calls.length).toBe(1)
})