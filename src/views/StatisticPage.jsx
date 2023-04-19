import React, { Component } from 'react'
import { Chart } from '../cmps/Chart'
import { bitcoinService } from '../services/bitcoin.service'

export class StatisticPage extends Component {

  state = {
    marketPrice: null,
    confirmedTransactions: null,
  }

  componentDidMount() {
    this.setMarketPrice()
    this.setConfirmedTransactions()
  }

  async setMarketPrice() {
    try {
      let marketPrice = await bitcoinService.getMarketPrice()
      this.setState({ marketPrice })
    } catch (err) {
      console.error('error from getting market price:', err)
      return null
    }
  }

  async setConfirmedTransactions() {
    try {
      let confirmedTransactions = await bitcoinService.getConfirmedTransactions()
      this.setState({ confirmedTransactions })
    } catch (err) {
      console.error('error from getting market price:', err)
      return null
    }
  }

  render() {
    const { marketPrice, confirmedTransactions } = this.state
    return (
      <section className='statistic'>
        {marketPrice && (
          <Chart chartData={marketPrice} />
        )}
        {confirmedTransactions && (
          <Chart chartData={confirmedTransactions} />
        )}
      </section>
    )
  }
}
