import React from 'react'
import Logo from './components/Logo.jsx'
import Navbar from './components/Navbar.jsx'
import Socials from './components/Socials.jsx'
import ContentRow from './components/ContentRow.jsx'

const Header = () => {
  return (
    <div className="Header">
      <ContentRow>
        <Logo />
        <Navbar>
          <a href="#">About us</a>
          <a href="#">Projects</a>
          <a href="#">News</a>
          <a href="#">Contact</a>
        </Navbar>
        <Socials>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </Socials>
      </ContentRow>
      <ContentRow style={{ flexDirection: "column", padding: "0" }}>
        <h1>Simple & Modern</h1>
        <h2>We make the world beautiful every day</h2>
      </ContentRow>
      <button>
        <i className="fas fa-angle-down"></i>
      </button>
    </div>
  )
}

export default Header