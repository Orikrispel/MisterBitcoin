import React, { Component } from 'react'
import { userService } from '../services/user.service'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signUp } from '../store/actions/user.actions'

export function Signup() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function OnSignup(ev) {
    ev.preventDefault()
    const name = ev.target[0].value
    dispatch(signUp(name))
    onBack()
  }

  function onBack() {
    navigate(-1)
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
