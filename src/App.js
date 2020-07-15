import React, { useState } from 'react';
import Notes from './components/Notes'
import Space from './components/Space'
import './App.css';

const App = () => {
  const [ page, setPage ] = useState('notes')

  const handleClick = path => {
    setPage(path)
  }
  return page === 'space' ?
    <div>
      <button onClick={() => handleClick('notes')}>Notes</button>
      <Space />
    </div>
    :
    <div>
      <button onClick={() => handleClick('space')}>See Who's In Space</button>
      <Notes />
    </div>
}

export default App;
