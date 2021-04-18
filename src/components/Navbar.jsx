import React from 'react'

const Navbar = ({ navNames, navLinks }) => {
  return (
    <ul className="Navbar">
      {navNames.map((name, key) => <li key={key}><a href={navLinks[key]}>{name}</a></li>)}
    </ul>
  )
}

export default Navbar