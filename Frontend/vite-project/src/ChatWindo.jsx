import React from 'react'
import './ChatWindo.css';
//import Chat from './Chat.jsx';
const ChatWindo = () => {
  return (
    <>
      <div className="chat-window">
        <div className="navbar">

          <span>sigmagpt &nbsp; <i className="fa-solid fa-angle-down"></i> </span>
          <div className="userIcon">
            <span><i className="fa-solid fa-user" id="ui"></i></span>
          </div>
        </div>
        {/* <Chat/> */}
        <div className="chatInput">
<div className="userInput">
<input type="text" placeholder='Type your message here...' />
<div id='submit'><i className="fa-solid fa-arrow-up-right-from-square" ></i></div>
</div>
<p className='info'> shivam dubey</p>

        </div>
      </div>

    </>
  )
}

export default ChatWindo