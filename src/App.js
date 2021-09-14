import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function Button(props) {
  const handleClick = () => {props.onClickFunction(props.incr)}
  return (
    <button onClick={handleClick}>
      +{props.incr}
    </button>
  )
}

function Display(props) {
  return (
    <div>{props.message}</div>  
  )
}

function App() {
  const [counter, setCounter] = useState(10);
  const incrCounter = (addition) => setCounter(counter + addition);
  return (
    <>
      <Button onClickFunction={incrCounter} incr={5} />
      <Button onClickFunction={incrCounter} incr={10} />
      <Display message={counter}/>
    </>
  )
}

export default App;
