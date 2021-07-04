import { useReducer } from 'react';
import './App.css';

const initialState = {
  message: 'hi'
}

function reducer(state, action) {
  switch (action.type) {
    case 'yell':
      return { message: state.message + ' => HEY!' } // state.message returns previous message
    case 'whisper':
      return { message: state.message + ' => Excuse me' }
    default:
      return { message: 'default' }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({ type: 'yell' })}>YELL</button>
      <button onClick={() => dispatch({ type: 'whisper' })}>WHISPER</button>
    </>);
}

export default App;
