import './App.css';
import { useEffect } from 'react';
import Main from './components/main';
import Undo from './components/undo';
import Redo from './components/redo';
import { useUndo } from './hook/useUndo.ts';
import { useNum } from './context/NumContext.tsx';

function App() {
  const { getPeople } = useUndo();
  const { num } = useNum(); // useNum으로 num 상태 접근

  useEffect(() => {
    console.log('APPPPPP', getPeople());
  }, [getPeople()]);

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
            {num.map((name, index) => ( // num을 사용하여 리스트 렌더링
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