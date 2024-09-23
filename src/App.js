import './App.css';
import { useEffect, useRef } from 'react';
import Main from './components/main';
import Undo from './components/undo';
import Redo from './components/redo';

function App() {
  const number = useRef(0)

useEffect(() => {
  console.log('number', number.current)
},[number.current])
  return (
    <div className="App">
      <Main/>
      <button onClick={() => {
        number.current ++
        console.log('mu', number.current)
      }}>+</button>
      <Undo/>
      <Redo/>
    </div>
  );
}

export default App;