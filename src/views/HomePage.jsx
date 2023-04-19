import React, { Component } from 'react'
import { userService } from '../services/user.service'
import { bitcoinService } from '../services/bitcoin.service'
import { Link } from 'react-router-dom'


export class HomePage extends Component {

  state = {
    coinsRate: null,
  }

  get user() {
    return userService.getLoggedinUser()
  }

  async componentDidMount() {
    try {
      const coinsRate = await bitcoinService.getRate(this.user.coins)
      this.setState({ coinsRate })
    } catch (error) {
      console.log('error:', error)
    }
  }

  render() {
    const { coinsRate } = this.state
    return (
      <div className='home-page'>
        <section>
          <i className="fa-brands fa-bitcoin fa-spin"></i>
          <h1>Welcome to CryptoWallet</h1>
          <p>Securely store and manage your cryptocurrency.</p>
          <Link to='/contact'><button>Get started</button ></Link>
        </section>

        <section>
          <p><i className="fa-solid fa-user"></i>{this.user.name}</p>

          <p> <i className="fa-solid fa-coins"></i> {this.user.coins} Coins</p>
          <p><i className="fa-brands fa-bitcoin"></i>{coinsRate || '(Loading...)'}  Bitcoins</p>
        </section>

        <section>
          <h2>Why use CryptoWallet?</h2>
          <ul>
            <li><i className="fa-solid fa-shield-halved"></i>Securely store your crypto assets</li>
            <li><i className="fa-solid fa-tablet-screen-button"></i>Easy to use interface</li>
            <li><i className="fa-solid fa-headset"></i>24/7 customer support</li>
            <li><i className="fa-solid fa-hand-holding-dollar"></i>Low fees</li>
          </ul>
        </section>
      </div>
    )
  }
}
