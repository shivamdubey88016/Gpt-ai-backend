import React from 'react'
import './Sidebar.css';
const Sidebar = () => {
  return (
    <>
      <section className="sidebar">
        <button>
      <img src="src/assets/chat-gpt.png" alt="Sidebar Icon" className='logo'></img>
         <span> <i className="fa-solid fa-pen-to-square" style={{color: "#ffffff"}}></i></span>

        </button>

        <ul className='history'>
          <li>History1
          </li>
          <li>History2</li>
          <li>History3</li>

        </ul>
<div className='settings'>
 <p>  by shivam dubey</p>
</div>  

      </section>


    </>
  )
}

export default Sidebar