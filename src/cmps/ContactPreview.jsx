import React from 'react'
import { Link } from 'react-router-dom'

export function ContactPreview({ contact, onRemoveContact }) {

  const contactStyle = { backgroundImage: `url(https://robohash.org/${contact._id}?set=set5)` }
  return (
    <article style={contactStyle} className='contact-preview'>
      <Link to={`/contact/${contact._id}`} className="info">
        <h2>{contact.name}</h2>
        <h4>{contact.type}</h4>
      </Link>
      <section className="actions">
        <button onClick={() => onRemoveContact(contact._id)} ><i className="fa-solid fa-trash"></i></button>
        <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
      </section>
    </article>
  )
}
