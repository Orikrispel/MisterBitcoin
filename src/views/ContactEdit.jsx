import { contactService } from '../services/contact.service'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function ContactEdit() {
  const navigate = useNavigate()
  const [contact, setContact] = useState(contactService.getEmptyContact())
  const params = useParams()

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

  async function onSave(ev) {
    ev.preventDefault()
    try {
      await contactService.saveContact(contact)
      navigate(-1)
    } catch (error) {
      console.log('error:', error)
    }
  }

  function handleChange({ target }) {
    const field = target.name
    let value = target.value

    switch (target.type) {
      case 'number':
      case 'range':
        value = +value
        break;
      case 'checkbox':
        value = target.checked
        break;
    }
    setContact({ ...contact, [field]: value })
  }

  return (
    <section className='contact-edit'>
      <h1>{contact._id ? 'Edit' : 'Add'} contact</h1>
      <form onSubmit={onSave}>
        <label htmlFor='name'>Name</label>
        <input name="name" id="name" onChange={handleChange} type="text" defaultValue={contact?.name || ''} />
        <label htmlFor='phone'>Phone</label>
        <input name="phone" id="phone" onChange={handleChange} type="text" defaultValue={contact?.phone || ''} />
        <label htmlFor='email'>Email</label>
        <input name="email" id="email" onChange={handleChange} type="text" defaultValue={contact?.email || ''} />
        <button type='submit'>save</button>
      </form>
    </section>
  )
}
