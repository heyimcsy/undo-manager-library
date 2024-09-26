import UndoManager from 'undo-manager';
import { useEffect, useRef } from 'react';
import {useNum} from "../context/NumContext.tsx";


const undoManager = new UndoManager();

export function useUndo() {
    const people = useRef([]);
    const { num, setNum } = useNum(); // useNum을 통해 num과 setNum 사용

    const addPerson = (name) => {
        people.current.push(name); // Add name to the ref
        setNum([...people.current]); // 전역 상태 업데이트
        console.log(getPeople());
    };

    const removePerson = () => {
        people.current.pop(); // Remove the last name from the ref
        setNum([...people.current]); // 전역 상태 업데이트
        console.log(getPeople());
    };

    const getPeople = () => {
        return people.current;
    };

    const createPerson = (name) => {
        addPerson(name);
        undoManager.add({
            undo: () => removePerson(),
            redo: () => addPerson(name),
        });
    };

    useEffect(() => {
        console.log('Current people:', people.current);
    }, [people.current]);

    return {
        addPerson,
        removePerson,
        createPerson,
        undoManager,
        getPeople,
    };
}