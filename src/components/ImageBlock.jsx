import React from 'react'

// this is class just for test

const ImageBlock = ({ color, background, size, className = "ImageBlock", children }) => {
  const [width, height] = size.split(' ')
  const style = {
    color: color,
    background: background,
    width: width,
    height: height
  }
  return (
    <div className={className} style={style}>{children}</div>
  )
}

export default ImageBlock