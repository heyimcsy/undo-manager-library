import './App.css';
import { useEffect, useRef } from 'react';
import Main from './components/main';
import Undo from './components/undo';
import Redo from './components/redo';
import { useUndo } from './hook/useUndo.ts';

function App() {
  const {num,getPeople} = useUndo()
console.log('APPPPPP', num, getPeople())
useEffect(() => {
  console.log('number', num)
},[num])
  return (
    <div className="App">
      <div
        style={{
          height: '500px',
          width: '1000px',
          border: '1px solid green',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ul>
          {num.map((name, index) => {
           return  <li key={index}>{name}</li>
          })}
        </ul>
      </div>
      <Main/>
      <Undo/>
      <Redo/>
    </div>
  );
}

export default App;