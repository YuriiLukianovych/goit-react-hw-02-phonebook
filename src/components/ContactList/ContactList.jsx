import React from 'react';
import ContactItem from 'components/ContactItem';
import css from './ContactList.module.scss';

function ContactList({ stateContactList, contactList, deleteContact, filter }) {
  if (!stateContactList.length) {
    return (
      <p style={{ color: '#6c0e0e', fontWeight: '500' }}>
        Contact List is empty
      </p>
    );
  }
  if (!contactList.length && filter) {
    return (
      <p style={{ color: '#6c0e0e', fontWeight: '500' }}>
        Nothing was found for your request
      </p>
    );
  }
  if (!contactList.length) {
    return;
  }
  return (
    <div className="boxWrapper">
      <ul className={`${css.contactList} list`}>
        {contactList.map(contact => {
          return (
            <ContactItem
              key={contact.id}
              contactItem={contact}
              deleteContact={deleteContact}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;
