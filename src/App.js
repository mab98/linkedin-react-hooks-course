import { useState } from 'react';
import './App.css';
import useInput from './useInput';

function App() {
  const [soundProps, resetSound] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');

  const submit = (e) => {
    e.preventDefault()
    alert(`${soundProps.value} sounds like ${colorProps.value}`)
    resetSound('')
    resetColor('#000000')
  }

  return (
    <form onSubmit={submit}>
      <input {...soundProps} type='text' placeholder='Sound...' />
      <input {...colorProps} type='color' />
      <button>ADD</button>
    </form>
  );
}

export default App;
