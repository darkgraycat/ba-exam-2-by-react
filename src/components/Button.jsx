import React from 'react'

const Button = ({ isRounded, onClick, icon, children }) => {
  return (
    <div
      className={isRounded ? 'Button rounded' : 'Button'}
      onClick={onClick}
    >
      {icon && <i className={icon}></i>}
      {children}
    </div>
  )
}

export default Button