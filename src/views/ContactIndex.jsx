import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { contactService } from '../services/contact.service'
import { ContactList } from '../cmps/ContactList'
import { ContactFilter } from '../cmps/ContactFilter'
import { loadContacts, removeContact, setFilterBy } from '../store/actions/contact.actions'



export function ContactIndex() {
  const contacts = useSelector((storeState) => storeState.contactModule.contacts)
  const filterBy = useSelector((storeState) => storeState.contactModule.filterBy)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadContacts())
  }, [])

  async function onRemoveContact(contactId) {
    try {
      dispatch(removeContact(contactId))
    } catch (error) {
      console.log('error:', error)
    }
  }

  function onChangeFilter(filterBy) {
    dispatch(setFilterBy(filterBy))
    dispatch(loadContacts())
  }

  if (!contacts) return <div>Loading...</div>
  return (
    <section className='contact-index'>
      <ContactFilter filterBy={filterBy} onChangeFilter={onChangeFilter} />
      <ContactList contacts={contacts} onRemoveContact={onRemoveContact} />
    </section>
  )
}
