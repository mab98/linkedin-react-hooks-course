import './App.css';
import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)]

const Star = ({ selected = false, onSelect }) => <FaStar onClick={onSelect} color={selected ? 'red' : 'gray'} />

const StarRating = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div>
      {createArray(totalStars).map((n, i) => (<Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />))}
      <p>({selectedStars} of {totalStars})</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <StarRating totalStars={10} />
    </div>
  );
}

export default App;
