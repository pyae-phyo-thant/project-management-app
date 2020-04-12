import React, { Component } from 'react'
import Notification from './Notification'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {

  render() {
    const { projects,auth,notifications } = this.props
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6 ">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m4 offset-m1">
            <Notification notifications={notifications}/>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  // console.log(state)
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}
// export default compose(firestoreConnect(['projects']),connect(mapStateToProps))(Dashboard)
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt','desc'] },
    { collection: 'notifications', limit: 6,orderBy: ['time','desc'] }
  ]),
)(Dashboard)
