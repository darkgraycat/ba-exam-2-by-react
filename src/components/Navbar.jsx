import React from 'react'

const Navbar = ({ names, links }) => {
  return (
    <ul className="Navbar">
      {names.map((name, key) => <li key={key}><a href={links[key]}>{name}</a></li>)}
    </ul>
  )
}

export default Navbar