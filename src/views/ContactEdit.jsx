import React, { Component } from 'react'
import { contactService } from '../services/contact.service'

export class ContactEdit extends Component {
  state = {
    contact: contactService.getEmptyContact(),
  }

  async componentDidMount() {
    const contactId = this.props.match.params.id
    if (contactId) {
      try {
        const contact = await contactService.getContactById(contactId)
        this.setState({ contact })
      } catch (error) {
        console.log('error:', error)
      }
    }
  }

  onSave = async (ev) => {
    ev.preventDefault()
    try {
      await contactService.saveContact({ ...this.state.contact })
      this.props.history.goBack()
    } catch (error) {
      console.log('error:', error)
    }
  }

  handleChange = ({ target }) => {
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
    this.setState(({ contact }) => ({ contact: { ...contact, [field]: value } }))
  }

  render() {
    const { contact } = this.state

    return (
      <section className='contact-edit'>
        <h1>{contact._id ? 'Edit' : 'Add'} contact</h1>
        <form onSubmit={this.onSave}>
          <label htmlFor='name'>Name</label>
          <input name="name" id="name" onChange={this.handleChange} type="text" defaultValue={contact?.name || ''} />
          <label htmlFor='phone'>Phone</label>
          <input name="phone" id="phone" onChange={this.handleChange} type="text" defaultValue={contact?.phone || ''} />
          <label htmlFor='email'>Email</label>
          <input name="email" id="email" onChange={this.handleChange} type="text" defaultValue={contact?.email || ''} />
          <button type='submit'>save</button>
        </form>
      </section>
    )
  }
}
