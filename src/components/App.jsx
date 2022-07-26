import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    let contacts = localStorage.getItem('contacts');
    let parseContacts = JSON.parse(contacts);
    if (contacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  haveContacts = (contacts, data) => {
    return contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
  };

  formSubmitHandler = data => {
    this.setState(({ contacts }) => {
      if (!this.haveContacts(contacts, data)) {
        return { contacts: [data, ...contacts] };
      } else {
        alert(`${data.name} is already exist`);
      }
    });
  };

  findContacts() {
    const searching = this.state.filter.toLowerCase();
    const findContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(searching)
    );
    return findContact;
  }

  filterChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>

        <Filter onChange={this.filterChange} value={this.state.filter} />
        <ContactList
          contacts={this.findContacts()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
