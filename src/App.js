import logo from './logo.svg';
import './App.css';
import {  Hellow , Byew } from './components/hello'
import { useState , useEffect } from 'react'

function App() {

  const [counter,setCounter] = useState(0);

  const increment =() =>{
    setCounter(counter+1)
  }

  console.log(counter)
  useEffect(()=>{
    document.title = `clicked ${counter} times`
  })

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Anirudh Das is learning React</p>
      <Hellow text="Hi everyone ,how are you ?"/>
      <Byew text="Goodbye,have a nice day!!"/>
      <button onClick={increment}>Click Me!</button>
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
