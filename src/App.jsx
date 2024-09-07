import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {

  function handleClick (){

    alert('button clicked');
  }

  const handleClick2 = () =>{

    alert ('more expensive');

  }

  return (
    <>
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>
     
      <Users></Users>
      
      <Team></Team>

      <Counter></Counter>
      <button onClick ={handleClick}>Click Me</button>
      <button onClick ={handleClick2}>Click 2</button>
      <button onClick ={()=>{alert('third button clicked')}}>Click 3</button>
    </>
  )
}

export default App
