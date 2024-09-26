import { useUndo } from '../hook/useUndo.ts';
import { useEffect, useReducer, useState } from 'react';

function Main () {
  const {createPerson,getPeople} = useUndo()
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
      <input value={addName} onChange={nameChange}/>
      <button onClick={addNameButton}>+</button>
    </div>
  )
}

export default Main

