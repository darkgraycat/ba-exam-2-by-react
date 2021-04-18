import React from 'react'
import Button from './Button.jsx'

const ProjectCard = ({
  heading,
  title,
  location,
  image,
  bgColor,
  align,
  children
}) => {
  return (
    <div className="ProjectCard">
      {align == 'left'
        &&
        <div className="ProjectCardImg">
          <div style={{ backgroundImage: `url(${image})` }}></div>
          <div style={{
            backgroundColor: bgColor,
            left: "-300px"
          }}></div>
        </div>
      }
      <div className="ProjectCardText">
        <div>
          <h4>{heading}</h4>
          <h3>{title}</h3>
        </div>
        <p>{children}</p>
        <Button>MORE DETAILS</Button>
        <i className="fas fa-map-marker-alt">
          <span>{location}</span>
        </i>
      </div>
      {align == 'right'
        &&
        <div className="ProjectCardImg">
          <div style={{ backgroundImage: `url(${image})` }}></div>
          <div style={{
            backgroundColor: bgColor,
            // left: "300px"
          }}></div>
        </div>
      }
    </div>
  )
}

export default ProjectCard