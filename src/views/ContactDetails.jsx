import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { TransferFund } from '../cmps/TransferFund'
import { contactService } from '../services/contact.service'
import { spendBalance, transferCoins } from '../store/actions/user.actions'
import { userService } from '../services/user.service'


export class _ContactDetails extends Component {
  state = {
    contact: null,
    user: userService.getLoggedinUser()
  }

  async componentDidMount() {
    const contact = await contactService.getContactById(this.props.match.params.id)
    this.setState({ contact })
  }

  onTransferCoins = (amount, contact) => {
    this.props.transferCoins(amount, contact)
  }

  onBack = () => {
    this.props.history.goBack()
  }

  render() {
    const { contact, user } = this.state
    if (!contact) return <div>Loading...</div>
    return (
      <section className='contact-details'>
        <img src={`https://robohash.org/${contact._id}?set=set5`} />
        <article>
          <h2>{contact.name}</h2>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Phone:</strong> {contact.phone}</p>
          <section className='btn-group'>
            <button onClick={this.onBack} >Back</button>
            <Link to={`/contact/edit/${contact._id}`}><button>Edit</button></Link>
          </section>
          <TransferFund
            contact={contact}
            onTransferCoins={this.onTransferCoins}
            maxCoins={user.coins}
          />
        </article>
      </section>
    )
  }
}


const mapStateToProps = (state) => ({
  user: state.userModule.loggedInUser
})

const mapDispatchToProps = { spendBalance, transferCoins }

export const ContactDetails = connect(mapStateToProps, mapDispatchToProps)(_ContactDetails)