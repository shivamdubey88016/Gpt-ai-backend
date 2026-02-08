import React from 'react'
import './ChatWindo.css';
import { MyContext } from './Mycontex.jsx';
import { ScaleLoader } from 'react-spinners';
import { useState, useContext, useEffect } from 'react';
import Chat from './Chat.jsx';







//import Chat from './Chat.jsx';
const ChatWindo = () => {
  const [loading, setLoading] = useState(true);
  const { prompts, setPrompts, responses, setResponses, currThread, setCurrThread, previousChats, setPreviousChats } = useContext(MyContext);
  const getResponse = async () => {



    const options = {

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        threadId: currThread,
        message: prompts
      })

    };
    try {
      const response = await fetch('http://localhost:3000/api/chats', options);
      const data = await response.json();
      console.log(data.reply);
      setResponses(data.reply);

      setLoading(false);


    } catch (err) {
      console.log(err);
    }



  }
  //append new chat to previous chats
  useEffect(() => {

    if (prompts && responses) {
      setPreviousChats(previousChats => ([
        ...previousChats,
        {
          role: "user",
          content: prompts
        },
        {
          role: "assistant",
          content: responses
        }



      ]));}
 setPrompts('');
}, [responses]);


  return (
    <>
      <div className="chat-window">
        <div className="navbar">

          <span>sigmagpt &nbsp; <i className="fa-solid fa-angle-down"></i> </span>
          <div className="userIcon">
            <span><i className="fa-solid fa-user" id="ui"></i></span>
          </div>
        </div>

        <Chat></Chat>
      

        <ScaleLoader color='white' loading={loading} className='loader' size={150}>

        </ScaleLoader>


        <div className="chatInput">
          <div className="userInput">
            <input type="text" placeholder='Type your message here...' value={prompts} onChange={(e) => setPrompts(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' ? getResponse() : null}

            ></input>


            <div id='submit' onClick={getResponse}><i className="fa-solid fa-arrow-up-right-from-square" ></i></div>
          </div>
          <p className='info'> shivam dubey</p>

        </div>
      </div>

    </>
  )
}

export default ChatWindo