import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement} from './store/counterSlice'

export const App = () => {
  const counter = useSelector(state => state.counter.counter)
  const dispatch = useDispatch()
  

  return (
    <>
      <h1>Counter</h1>
      <p>Count: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      
    </>
  )
}
