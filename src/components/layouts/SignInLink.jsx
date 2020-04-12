import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { SignOut } from '../../store/ation/authActions'

const SignInLink = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink exact to="/">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <a href="#" onClick={props.SignOut}>Log Out</a>
      </li>
      <li>
        <Link to="/" className="btn btn-floating green lighten-1">
          {props.profile.initials}
        </Link>
      </li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    SignOut: () => dispatch(SignOut())
  }
}

export default connect(null, mapDispatchToProps)(SignInLink)
