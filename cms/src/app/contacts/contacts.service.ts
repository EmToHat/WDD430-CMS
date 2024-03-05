import { EventEmitter, Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from '../../assets/mock/MOCKCONTACTS';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contactSelectedEvent = new EventEmitter<Contact>();
  contactChangedEvent = new EventEmitter<Contact[]>();


  contacts: Contact[] = [];

  constructor() {
    // this.contacts = MOCKCONTACTS;
    this.contacts = this.sortContacts(MOCKCONTACTS);
  }

  getContacts(){
    return this.contacts.slice();
  }

  getContact(id: string): Contact{
    for(let contact of this.contacts){
      if(contact.id === id){
        return contact;
      }
    }
    return null;
  }

  deleteContact(contact: Contact) {
    if (!contact) {
      window.alert('Contact not found - deletion unsuccessfull!');
      return;
    }
    const pos = this.contacts.indexOf(contact);
    if (pos < 0) {
      window.alert('Contact not found - deletion unsuccessfull!');
      return;
    }
    this.contacts.splice(pos, 1);
    window.alert(contact.name + ' contact successfully deleted.');
    // window.alert('Contact deleted successfully!');
    this.contactChangedEvent.emit(this.contacts.slice());
  }

  // Version 3: Sort contacts by name
  private sortContacts(contacts: Contact[]): Contact[] {
    // Separate groups and individual contacts
    const groups = contacts.filter(contact => contact.group && contact.group.length > 0);
    const individuals = contacts.filter(contact => !contact.group);

    // Sort groups alphabetically by name
    const sortedGroups = groups.sort((a, b) => a.name.localeCompare(b.name));
    // Initialize the sortedContacts array
    let sortedContacts: Contact[] = [];
    // Function to extract the last name from the full name
    const lastName = (name: string) => {
      const spaceIndex = name.indexOf(' ');
      return spaceIndex !== -1 ? name.substring(spaceIndex + 1) : name;
    };

    // Sort group members alphabetically by last name and add them to sortedContacts
    sortedGroups.forEach(group => {
      // Add the group itself
      sortedContacts.push(group);
      // Sort group members alphabetically by last name
      const sortedMembers = group.group.sort((a, b) => lastName(a.name).localeCompare(lastName(b.name)));
      // Add each sorted member to the sortedContacts array
      sortedMembers.forEach(member => {
        const memberDetail = contacts.find(contact => contact.id === member.id);
        if (memberDetail) {
          sortedContacts.push(memberDetail);
        }
      });
    });

    // Sort individual contacts alphabetically by last name
    const sortedIndividuals = individuals.sort((a, b) => lastName(a.name).localeCompare(lastName(b.name)));
    // Add sorted individual contacts to the sortedContacts array
    sortedContacts = sortedContacts.concat(sortedIndividuals);

    return sortedContacts;
  }
}
