import React, { Component } from 'react'
import { userService } from '../services/user.service'

export class Signup extends Component {

  OnSignup = (ev) => {
    ev.preventDefault()
    userService.signup(ev.target[0].value)
    this.props.history.push('/')
  }

  render() {
    return (
      <section className='signup'>
        <i className="fa-brands fa-bitcoin fa-spin"></i>
        <h2>Please enter your name:</h2>
        <form onSubmit={this.OnSignup}>
          <input type="text" name="name" id="name" placeholder='Your full name here'></input>
          <button type="submit">Sign up</button>
        </form>
      </section>
    )
  }
}
