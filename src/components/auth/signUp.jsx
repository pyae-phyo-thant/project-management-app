import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { SignUp } from '../../store/ation/authActions'

class signUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  handelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handelSubmit = (e) => {
      e.preventDefault()
      this.props.SignUp(this.state)
    }

  render() {
    const { auth } = this.props
    if (auth.uid) return <Redirect to='/' />
    return (
      <div className="container">
        <form onSubmit={this.handelSubmit} >
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label className="green-text" htmlFor="firstName">Firstname</label>
            <input className="green-text darken-3" type="text" id="firstName" onChange={this.handelChange} />
          </div>
          <div className="input-field">
            <label className="green-text" htmlFor="lastName">Lastname</label>
            <input className="green-text darken-3" type="text" id="lastName" onChange={this.handelChange} />
          </div>
          <div className="input-field">
            <label className="green-text" htmlFor="email">Email</label>
            <input className="green-text darken-3" type="email" id="email" onChange={this.handelChange} />
          </div>
          <div className="input-field">
            <label className="green-text" htmlFor="password">Password</label>
            <input className="green-text darken-3" type="password" id="password" onChange={this.handelChange} />
          </div>
          <div className="input-field">
            <button className="btn green lighten-1 z-depth-0">Sign Up</button>
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
    SignUp: (newUser) => dispatch(SignUp(newUser))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(signUp)
