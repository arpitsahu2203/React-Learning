import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  //here we are using useState or State hooks that is used to update
  //the changes that are performed on the page to the ui
  //here "Counter" is the constant where the value is stored and is stored by using "useState"
  //and "setCounter" is the function or operation performed on the value that is to be reflected to ui
  let [Counter, setCounter]=useState(15)

  const addValue=()=>{
    console.log("clicked");
    if(Counter<30){
      setCounter(Counter+1);
    }
    
  }

  const reduceValue=()=>{
    console.log("clicked");
    if(Counter>0){
      setCounter(Counter-1);
    }
  }

  return (
    <>
    <h1> Simple Counter Project</h1>
    <h3> Counter : {Counter}</h3>
    <button onClick={addValue} disabled={Counter===30}>Add Counter</button>
    <br></br>
    <button  onClick={reduceValue} disabled={Counter===0}>Reduce Counter</button>
    </>
  )
}

export default App
