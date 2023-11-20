import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import "../styles/header.style.css"
function Header() {

  return (
    <>
        <header class="navbar">
            <Link to="/"><img src="src\assets\SANA.png" alt="" className='brand'/></Link>
            <div>
              <Link to="/login">Login</Link>

            </div>
            
        </header>
    </>
  )
}

export default Header
