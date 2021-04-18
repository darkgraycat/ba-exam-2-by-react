import React from 'react'
import ContentRow from './components/ContentRow.jsx'
import PageTitle from './components/PageTitle.jsx'
import ProjectCard from './components/ProjectCard.jsx'

const Projects = () => {
  return (
    <div className="Projects">
      <PageTitle>What we do</PageTitle>
      <ContentRow>
        <ProjectCard
          heading="ONE WORLD"
          title="TRADE CENTER"
          location="New York City, United States - 1776 feet"
          image="./img/projects_1.png"
          bgColor="#55b7ff"
          align="left"
        >
          Increasing prosperity in our lives can be accomplished by having the right frame of mind. The truth is, our thoughts are very powerful.
        </ProjectCard>
      </ContentRow>
      <ContentRow>
        <ProjectCard
          heading="INTERNATIONAL"
          title="COMMERCE CENTRE"
          location="Hong Kong - 1588 Feet"
          image="./img/projects_2.png"
          bgColor="#7e5aff"
          align="right"
        >
          Successful businesses have many things in common, today we’ll look at the big ‘R’ of recognition and how a digital advertising network may help.
        </ProjectCard>
      </ContentRow>
    </div>
  )
}

export default Projects