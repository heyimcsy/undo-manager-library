import { useUndo } from '../hook/useUndo.ts';

function Redo() {
  const {  undoManager } = useUndo()
  return <button onClick={() => undoManager.redo()}>Redo</button>
}
export default Redo