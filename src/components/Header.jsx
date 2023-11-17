import { useState } from 'react'
import "../styles/header.style.css"
function Header() {

  return (
    <>
        <header class="navbar">
            <img src="src\assets\genericIcon.png" alt="" className='brand'/>
            <a href="">login</a>
        </header>
    </>
  )
}

export default Header
