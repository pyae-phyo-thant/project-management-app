import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/ation/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }
  handelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handelSubmit = (e) => {
      e.preventDefault();
      this.props.createProject(this.state)
      this.props.history.push('/')
    }

  render() {
    const { auth } = this.props
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">
        <form onSubmit={this.handelSubmit}>
          <h5 className="grey-text text-darken-3">Create Your Project</h5>
          <div className="bd-btn"></div>
          <div className="input-field margin-top">
            <label className="green-text" htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handelChange} required/>
          </div>
          <div className="input-field">
            <label className="green-text" htmlFor="content">Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handelChange} required></textarea>
          </div>
          <div className="input-field">
            <button className="btn green darken-3 waves-effect waves-light bd-radius z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
