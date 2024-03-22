import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Contact } from './contact-model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [];

  contactSelectedEvent = new EventEmitter<Contact>();
  contactChangedEvent: EventEmitter<Contact[]> = new EventEmitter<Contact[]>();
  contactsChanged = new Subject<Contact[]>();
  contactListChangedEvent = new Subject<Contact[]>();

  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get<Contact[]>('https://wdd430-cms-22cc9-default-rtdb.firebaseio.com/contacts');
  }

  getContact(id: string) {
    const contact = this.contacts.find((contact) => contact.id === id);
    return contact;
  }

  addContact(newContact: Contact) {
     // Add the new contact to contacts array
    this.contacts.push(newContact);
     // Call storeContacts() to update the contact list on the server
    this.storeContacts();
  }

  updateContact(originalContact: Contact, newContact: Contact) {
    // Find the index of the original contact
    const index = this.contacts.findIndex(con => con.id === originalContact.id);
    if (index !== -1) {
      // Update the contact in the array
      this.contacts[index] = newContact;
      // Call storeContacts() to update the contact list on the server
      this.storeContacts();
    }
  }

  deleteContact(contact: Contact) {
    // Find the index of the contact to delete
    const index = this.contacts.findIndex(con => con.id === contact.id);
    if (index !== -1) {
      // Remove the contact from the array
      this.contacts.splice(index, 1);
      // Call storeContacts() to update the contact list on the server
      this.storeContacts();
    }
  }

  storeContacts(): void {
    const contactsString = JSON.stringify(this.contacts);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.put('https://wdd430-cms-22cc9-default-rtdb.firebaseio.com/contacts', contactsString, { headers })
      .pipe(
        catchError((error: any) => {
          console.error('Error storing contacts:', error);
          throw error;
        })
      )
      .subscribe(() => {
        this.contactListChangedEvent.next(this.contacts.slice());
      });
  }

  onSelected(contact: Contact) {
    this.contactSelectedEvent.emit(contact);
  }
}

