import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { deleteProject } from '../../store/ation/projectActions'
import moment from 'moment'


const ProjectDetail = (props) => {
  const { project,auth } = props
  const handleDelete = e => {
        const { id } = props;
        e.preventDefault();
        props.deleteProject(id);
        props.history.push('/')
  }
  if (!auth.uid) return <Redirect to='/signin' />
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{ project.title }</span>
            <p>{ project.content }</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div>Posted By {project.authorFirstName} {project.authorLastName}</div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
            {/* <button className="waves-effect waves-light btn-small" onClick={handleDelete}>Delete
            //   <i className="material-icons left">delete</i>
             </button>*/}
          </div>
        </div>
      </div>
    )
  }else {
    return (
      <div className="container center">
        <p>Loading Project ....</p>
      </div>
    )
  }
}
const MapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth,
    id: id,
  }
}
const mapDistpacthToProps = dispatch => {
    return {
        deleteProject: (id) => dispatch(deleteProject(id))
    }
}

export default compose(
  connect(MapStateToProps, mapDistpacthToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetail)
