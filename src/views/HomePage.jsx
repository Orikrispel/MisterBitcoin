import React, { Component } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { userService } from '../services/user.service'
import { bitcoinService } from '../services/bitcoin.service'
import { Link } from 'react-router-dom'
import { MovesList } from '../cmps/MovesList'
import { useEffect } from 'react'
import { useState } from 'react'


export function HomePage() {

  const [coinsRate, setCoinsRate] = useState(null)
  const user = useSelector((storeState) => {
    return storeState.userModule.loggedInUser
  })

  useEffect(() => {
    loadCoinsRate()
  }, [])

  async function loadCoinsRate() {
    try {
      const coinsRate = await bitcoinService.getRate(user.coins)
      setCoinsRate(coinsRate)
    } catch (error) {
      console.log('error:', error)
    }
  }

  return (
    <div className='home-page' >
      <section>
        <i className="fa-brands fa-bitcoin fa-spin"></i>
        <h1>Welcome to CryptoWallet</h1>
        <p>Securely store and manage your cryptocurrency.</p>
        <Link to='/contact'><button>Get started</button ></Link>
      </section>

      <section>
        <p><i className="fa-solid fa-user"></i>{user.name}</p>

        <p> <i className="fa-solid fa-coins"></i> {user.coins} Coins</p>
        <p><i className="fa-brands fa-bitcoin"></i>{coinsRate || '(Loading...)'}  Bitcoins</p>
      </section>

      <section className='reasons-list'>
        <h2>Why use CryptoWallet?</h2>
        <ul>
          <li><i className="fa-solid fa-shield-halved"></i>Securely store your crypto assets</li>
          <li><i className="fa-solid fa-tablet-screen-button"></i>Easy to use interface</li>
          <li><i className="fa-solid fa-headset"></i>24/7 customer support</li>
          <li><i className="fa-solid fa-hand-holding-dollar"></i>Low fees</li>
        </ul>
      </section>

      {user.moves &&
        <MovesList
          userMoves={user.moves.slice(0, 3)}
          title='Last 3 moves:'
        />}
    </div >
  )
}
