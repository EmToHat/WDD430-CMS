import { EventEmitter, Injectable } from '@angular/core';
import { Contact } from './contact-model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  // Create a class variable named 'contacts' initialized with an empty array
  // private contacts: Contact[] = [];
  private contacts: Contact[] = [];

  contactSelectedEvent = new EventEmitter<Contact>();
  contactChangedEvent: EventEmitter<Contact[]> = new EventEmitter<Contact[]>();
  contactsChanged = new Subject<Contact[]>();
  contactListChangedEvent = new Subject<Contact[]>();

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

  addContact(newContact: Contact) {
    if (!newContact) {
      return;
    }
    newContact.id = this.generateUniqueId(); 

    // Add the new contact to the contacts array
    this.contacts.push(newContact);

    // Emit event to inform about changes in contacts list
    this.contactListChangedEvent.next([...this.contacts]);
  }

  updateContact(originalContact: Contact, newContact: Contact) {
    if (!originalContact || !newContact) {
      return;
    }

    const index = this.contacts.findIndex(contact => contact === originalContact);
    if (index < 0) {
      return;
    }

    // Update the contact with new data
    this.contacts[index] = newContact;

    // Emit event to inform about changes in contacts list
    this.contactListChangedEvent.next([...this.contacts]);
  }

  deleteContact(contact: Contact) {
    if (!contact) {
      return;
    }

    const index = this.contacts.findIndex(c => c === contact);
    if (index < 0) {
      return;
    }

    // Remove the contact from the contacts array
    this.contacts.splice(index, 1);

    // Emit event to inform about changes in contacts list
    this.contactListChangedEvent.next([...this.contacts]);
  }

  // Method to generate unique id for new contact
  private generateUniqueId(): string {
    // Your implementation to generate a unique string id (e.g., using UUID)
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
          v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  

  onSelected(contact: Contact) {
    //console.log('ContactService - Selected Contact: ', contact);
    this.contactSelectedEvent.emit(contact);
  }
}
