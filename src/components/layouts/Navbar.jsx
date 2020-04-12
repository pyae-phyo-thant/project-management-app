import React from 'react'
import { Link } from 'react-router-dom'
import SignInLink from './SignInLink'
import SignOutLink from './SignOutLink'
import { connect } from 'react-redux'
import pico from './pico.png'


const Navbar = (props) => {
  const { auth,profile } = props
  const links = auth.uid ? <SignInLink profile={profile} /> : <SignOutLink />
  return (
    <nav className="nav-wraper  grey lighten-3">
      <div className="container">
        <Link to='/' className="brand-logo mg-top"><img src={pico} alt="logo" /></Link>
        { links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
