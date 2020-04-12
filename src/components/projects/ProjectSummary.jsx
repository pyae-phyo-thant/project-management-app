import React from 'react'
import moment from 'moment'
import './projectsummary.css'

const ProjectSummary = ({project}) => {

  return (
    <div className="card z-depth-2 project-summary bd-color">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by the {project.authorFirstName} {project.authorLastName}</p>
        <p className="gret-text">{moment(project.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default ProjectSummary
