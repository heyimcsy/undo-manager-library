import { useUndo } from '../hook/useUndo.ts';

function Undo() {
  const {  undoManager } = useUndo()
  return <button onClick={() => undoManager.undo()}>Undo</button>
}
export default Undo