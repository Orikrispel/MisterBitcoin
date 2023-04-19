import React, { Component } from 'react'
import { useState } from 'react'
import { userService } from '../services/user.service'


export function TransferFund(props) {
  const [amount, setAmount] = useState(0)
  const { maxCoins, onTransferCoins, contact } = props

  function onSetAmount({ target }) {
    setAmount(target.value)
  }

  return (
    <section className='transfer-fund'>
      <p>Transfer coins to {contact.name}</p>
      <label htmlFor="amount">Amount:</label>
      <input onChange={onSetAmount} type="number" name="amount" />
      <button onClick={() => onTransferCoins(amount, contact)}>Transfer</button>
    </section>
  )

}
