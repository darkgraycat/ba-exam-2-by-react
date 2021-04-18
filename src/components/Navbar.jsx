import React from 'react'

const Navbar = ({ children }) => {
  return (
    <ul className="Navbar">
      {children.map((item, key) => <li key={key}>{item}</li>)}
    </ul>
  )
}

export default Navbar