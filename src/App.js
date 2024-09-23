import './App.css';
import { useEffect, useRef, useState } from 'react';
import { useUndo } from './hook/useUndo.ts';



function App() {
  // const people = useRef([]); // Ref to hold the actual array
  const number = useRef(0)
  const {createPerson, undoManager,num} = useUndo()
  const [addName, setAddName] = useState(''); // Input value state
  // const [num, setNum] = useState([]); // State to trigger UI updates

  // const addPerson = (name) => {
  //   people.current.push(name); // Add name to the ref
  //   setNum([...people.current]); // Trigger re-render by updating state
  //   console.log(getPeople());
  // };
  //
  // const removePerson = () => {
  //   people.current.pop(); // Remove the last name from the ref
  //   setNum([...people.current]); // Trigger re-render by updating state
  //   console.log(getPeople());
  // };
  //
  // const getPeople = () => {
  //   return people.current;
  // };

  const nameChange = (e) => {
    setAddName(e.target.value); // Update input value
  };

  const addNameButton = () => {
    if (addName) {
      createPerson(addName); // Add the input name
      setAddName('')
    }
  };

  // const createPerson =(name) => {
  //   addPerson(name);
  //   undoManager.add({
  //     undo: () => removePerson(),
  //     redo: () => addPerson(name),
  //   });
  // };

useEffect(() => {
  console.log('number', number.current)
},[number.current])
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
          {num.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
      <input value={addName} onChange={nameChange} />
      <button onClick={addNameButton}>+</button>
      <button onClick={() => {
        number.current ++
        console.log('mu', number.current)
      }}>+</button>
      <button onClick={() => undoManager.undo()}>Undo</button>
      <button onClick={() => undoManager.redo()}>Redo</button>
    </div>
  );
}

export default App;