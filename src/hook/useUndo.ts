import UndoManager from 'undo-manager';
import {useEffect, useRef, useState} from 'react';

const undoManager = new UndoManager();

export function useUndo() {
    // console.log('rerendering use undo');
    const people = useRef([]);
     const [num, setNum] = useState([]); // State to trigger UI updates

    const addPerson = (name) => {
        people.current.push(name); // Add name to the ref
        setNum([...people.current]); // Trigger re-render by updating state
        console.log(getPeople());
    }


    const removePerson = () => {
        people.current.pop(); // Remove the last name from the ref
        setNum([...people.current]); // Trigger re-render by updating state
        console.log(getPeople());
    }

    const getPeople = () => {
        return people.current;
    };

    const createPerson =(name) => {
        addPerson(name);
        undoManager.add({
            undo: () => removePerson(),
            redo: () => addPerson(name),
        });
    };

    // useEffect(()=> {
    //     console.log('createeeeeee');
    //     undoManager.add({
    //         undo: () => removePerson(),
    //         redo: () => addPerson('')
    //     });
    // }, []);

    useEffect(()=> {
        console.log('Current people:', people.current);
        // console.log('nummmm', num)
    }, [people.current]);

    return {
        addPerson,
        removePerson,
        createPerson,
        undoManager,
        getPeople,
        num
    };
}
