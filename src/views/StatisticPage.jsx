import React, { useEffect, useState } from 'react'
import { Chart } from '../cmps/Chart'
import { bitcoinService } from '../services/bitcoin.service'

export function StatisticPage() {
  const [marketPrice, setMarketPrice] = useState(null)
  const [confirmedTransactions, setConfirmedTransactions] = useState(null)

  useEffect(() => {
    setMarketPriceValues()
    setConfirmedTransactionsValues()
  }, [])

  async function setMarketPriceValues() {
    try {
      let marketPrice = await bitcoinService.getMarketPrice()
      setMarketPrice(marketPrice)
    } catch (err) {
      console.error('error from getting market price:', err)
      return null
    }
  }

  async function setConfirmedTransactionsValues() {
    try {
      let confirmedTransactions = await bitcoinService.getConfirmedTransactions()
      setConfirmedTransactions(confirmedTransactions)
    } catch (err) {
      console.error('error from getting market price:', err)
      return null
    }
  }

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
