import './App.css';
import { useEffect } from 'react';
import Main from './components/main';
import Undo from './components/undo';
import Redo from './components/redo';
import { useNum } from './context/NumContext.tsx';

function App() {
  const { num } = useNum();


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
            {num.current.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
        <Main />
        <Undo />
        <Redo />
      </div>
  );
}

export default App;