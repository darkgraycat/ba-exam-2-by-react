import React from 'react'
import Logo from './components/Logo.jsx'
import ImageBlock from './components/ImageBlock.jsx'

const Header = () => {
  return (
    <div className="Header">
      <h1>Header</h1>
      <Logo />
      <ImageBlock
        color="#88f"
        background="#444"
        size="200px 40px"
      >
        Some text
      </ImageBlock>
    </div>
  )
}

export default Header