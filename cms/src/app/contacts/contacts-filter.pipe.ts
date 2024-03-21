import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './contact-model';

@Pipe({
  name: 'contactsFilter'
})
export class ContactsFilterPipe implements PipeTransform {
  transform(contacts: Contact[], term: string): any {
    if (!term || term.length === 0) {
      return contacts; // If the search term is empty or not provided, return the original array
    }

    // Use the filter() method to create a new array containing only contacts whose name includes the search term
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(term.toLowerCase())
    );

    if (filteredContacts.length === 0) {
      return contacts; // If no contacts match the search term, return the original array
    }

    return filteredContacts; // Return the filtered array
  }
}
