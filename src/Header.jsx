import React from 'react'
import Logo from './components/Logo.jsx'
import Navbar from './components/Navbar.jsx'
import Button from './components/Button.jsx'
import Socials from './components/Socials.jsx'
import ContentRow from './components/ContentRow.jsx'

const Header = () => {

  const handleScrollDown = e => console.log('scroll down', e)

  const handleLink = target => e => console.log('link is', target, e)

  return (
    <div className="Header">
      <ContentRow>
        <Logo />
        <Navbar
          names={['About us', 'Projects', 'News', 'Contact']}
          links={['#about', '#projects', '#news', '#contact']}
        />
        <Socials>
          <Button isRounded={true} onClick={handleLink('facebook')} icon="fab fa-facebook-f" />
          <Button isRounded={true} onClick={handleLink('twitter')} icon="fab fa-twitter" />
          <Button isRounded={true} onClick={handleLink('instagram')} icon="fab fa-instagram" />
        </Socials>
      </ContentRow>
      <ContentRow style={{ flexDirection: "column", padding: "0" }}>
        <h1>Simple & Modern</h1>
        <h2>We make the world beautiful every day</h2>
      </ContentRow>
      <ContentRow>
        <div></div>
        <Button isRounded={true} onClick={handleScrollDown} icon="fas fa-angle-down" />
        <div></div>
      </ContentRow>
    </div>
  )
}

export default Header