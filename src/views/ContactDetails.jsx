import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { TransferFund } from '../cmps/TransferFund'
import { contactService } from '../services/contact.service'
import { transferCoins } from '../store/actions/user.actions'

export function ContactDetails() {
  const [contact, setContact] = useState(null)
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const user = useSelector((storeState) => {
    return storeState.userModule.loggedInUser
  })

  useEffect(() => {
    loadContact()
  }, [params.id])

  async function loadContact() {
    try {
      const contact = await contactService.getContactById(params.id)
      setContact(contact)
    } catch (error) {
      console.log('error:', error)
    }
  }

  function onTransferCoins(amount, contact) {
    dispatch(transferCoins(amount, contact))
  }

  function onBack() {
    navigate(-1)
  }

  if (!contact) return <div>Loading...</div>
  return (
    <section className='contact-details'>
      <img src={`https://robohash.org/${contact._id}?set=set5`} />
      <article>
        <h2>{contact.name}</h2>
        <p><strong>Email:</strong> {contact.email}</p>
        <p><strong>Phone:</strong> {contact.phone}</p>
        <section className='btn-group'>
          <button onClick={onBack} >Back</button>
          <Link to={`/contact/edit/${contact._id}`}><button>Edit</button></Link>
        </section>
        <TransferFund
          contact={contact}
          onTransferCoins={onTransferCoins}
          maxCoins={user.coins}
        />
      </article>
    </section>
  )
}