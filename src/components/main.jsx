import { useUndo } from '../hook/useUndo.ts';
import { useEffect, useState } from 'react';

function Main () {
  const {createPerson,num,getPeople} = useUndo()
  console.log('checkkkk',num)
  const [addName, setAddName] = useState(''); // Input value state
  const nameChange = (e) => {
    setAddName(e.target.value); // Update input value
  };

  const addNameButton = () => {
    if (addName) {
      createPerson(addName); // Add the input name
      setAddName('')
    }
  };
  useEffect(() => {
    console.log('111111',getPeople())
  }, [getPeople()]);
  return(
    <div>
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
            return <li key={index}>{name}</li>
          })}
        </ul>
      </div>
      <input value={addName} onChange={nameChange}/>
      <button onClick={addNameButton}>+</button>
    </div>
  )
}

export default Main