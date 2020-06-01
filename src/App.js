import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reacting
        </a>
        <ButtonComp />
      </header>
    </div>
  );
}
function ButtonComp(){


  const [likecount, setCount] = useState(0);
  console.log(useState(0));
  function likeHandler(){
    setCount(prev => prev + 1);
  }
  function dislikeHandler(){
    setCount(prev => prev - 1); 
  }
  return(
    <>
        <button onClick={likeHandler}>Like</button>
        <button onClick={dislikeHandler}>Dislike</button>
        <h4>Button clickde {likecount} times</h4>
    </>      
  );
}
export default App;
