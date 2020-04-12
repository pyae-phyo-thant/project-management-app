import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SignIn } from '../../store/ation/authActions'
import { Redirect } from 'react-router-dom'

class signIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handelSubmit = (e) => {
      e.preventDefault()
      this.props.SignIn(this.state)
    }

  render() {
    const {authError,auth} = this.props
    if (auth.uid) return <Redirect to='/' />
    return (
      <div className="container">
        <form onSubmit={this.handelSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label className="green-text" htmlFor="email">Email</label>
            <input className="green-text darken-3" type="email" id="email" onChange={this.handelChange} />
          </div>
          <div className="input-field">
            <label className="green-text" htmlFor="password">Password</label>
            <input className="green-text darken-3" type="password" id="password" onChange={this.handelChange} />
          </div>
          <div className="input-field">
            <button className="btn green lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SignIn: (creds) => dispatch(SignIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(signIn)
