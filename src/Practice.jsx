import React, { useContext } from 'react'
import { createContext } from 'react';

function Practice() {
  const users = useContext(createContext);
  return (
    <div>
      <h1>Practice {users}</h1>
    </div>
  )
}

export default Practice;
