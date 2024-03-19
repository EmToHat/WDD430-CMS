import { EventEmitter, Injectable } from '@angular/core';
import { Contact } from './contact-model';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  // Create a class variable named 'contacts' initialized with an empty array
  // private contacts: Contact[] = [];
  contacts: Contact[] = [];

  contactSelectedEvent = new EventEmitter<Contact>();
  contactChangedEvent: EventEmitter<Contact[]> = new EventEmitter<Contact[]>();

  constructor() {
      //console.log('ContactService: Initialized!');
      this.contacts = MOCKCONTACTS;
    }
  
  // Method to return a copy of the contacts array
  getContacts() {
    const contacts = this.contacts.slice();
    //console.log('ContactService - Contacts: ', contacts);
    return contacts; // Using slice() to create a shallow copy of the array
  }

  // Method to find a specific Contact object in the contacts array by ID
  getContact(id: string) {
    const contact = this.contacts.find((contact) => contact.id === id);
    //console.log('ContactService - Contact: ', contact);
    return contact;
  }

  deleteContact(contact: Contact) {
    if (!contact) {
      return;
    }
    const pos = this.contacts.indexOf(contact);
    if (pos < 0) {
      return;
    }
    this.contacts.splice(pos, 1);
    this.contactChangedEvent.emit(this.contacts.slice());
  }

  onSelected(contact: Contact) {
    //console.log('ContactService - Selected Contact: ', contact);
    this.contactSelectedEvent.emit(contact);
  }
}
