import React, { createContext, useState } from 'react'
import '../styles/App.css';
import { UserProfile } from './UserProfile';
// import { createContext } from 'react';

const UserContext = createContext();

const App = () => {
  const [value, setValue] = useState({name:"10xAcademy", age:3});
  return (
    <div id="main">
      <UserContext.Provider value={value}>
        <UserProfile value={value}/>
      </UserContext.Provider>
    </div>
  )
}


export default App;
export {UserContext}
