import { Injectable } from '@angular/core';
import { Contact } from './contact-model';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable({
  providedIn: 'root'
})

export class ContactsService {

  // Create a class variable named 'contacts' initialized with an empty array
  // private contacts: Contact[] = [];
  contacts: Contact [] =[];
    Constructor() {
        this.contacts = MOCKCONTACTS;
    }
    

  // Method to find a specific Contact object in the contacts array by ID
  getContact(id: string): Contact | null {
    for (const contact of this.contacts) {
      if (contact.id === id) {
        return contact; // Return the Contact object if found
      }
    }
    return null; // Return null if the contact with the specified ID is not found
  }
}
