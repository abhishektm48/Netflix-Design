import React from 'react'
import "./Navbar.css";
function Navbar() {
  return (
    <div className='navbar'>
       <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" /> 
       <a href=''><span className='home'>Home</span></a>
       <a href=''>TV Shows</a>
       <a href=''>Movies</a>
       <a href=''>Recently Added</a>
       <a href=''>My List</a>
       <i class="fa-solid fa-bars toggle"></i>
       <i class="fa-solid fa-magnifying-glass mar"></i>
       <i class="fa-solid fa-bell"></i>
       <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    </div>
  )
}

export default Navbar