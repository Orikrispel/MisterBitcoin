import React, { Component } from 'react'
import { userService } from '../services/user.service'
import { useNavigate } from 'react-router-dom'

export function Signup() {
  const navigate = useNavigate()

  function OnSignup(ev) {
    ev.preventDefault()
    userService.signup(ev.target[0].value)
    navigate('/')
  }

  return (
    <section className='signup'>
      <i className="fa-brands fa-bitcoin fa-spin"></i>
      <h2>Please enter your name:</h2>
      <form onSubmit={OnSignup}>
        <input type="text" name="name" id="name" placeholder='Your full name here'></input>
        <button type="submit">Sign up</button>
      </form>
    </section>
  )
}
