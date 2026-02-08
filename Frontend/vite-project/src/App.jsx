import React from 'react'
import './App.css'
import Sidebar from './Sidebar.jsx';
//import Chat from './Chat.jsx';  
import ChatWindo from './ChatWindo.jsx';
import { MyContext } from './Mycontex.jsx';

const App = () => {
  const providerValues = {};
  return (
    <div className="app">
      <MyContext.Provider value={providerValues}>
        <Sidebar />


        <ChatWindo />
      </MyContext.Provider>
    </div>
  )
}

export default App
