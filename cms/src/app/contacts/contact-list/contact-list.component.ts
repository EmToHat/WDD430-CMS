// Child Components: ContactItemComponent
// Sibling Component: ContactDetailComponent

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})

export class ContactListComponent {
  public contacts: Contact[] = [
    new Contact('1', 'R. Kent Jackson', 'jacksonk@byui.edu', '208-496-3771', '../../assets/images/jacksonk.jpg', []),
    new Contact('2', 'Rex Barzee', 'barzeer@byui.edu', '208-496-3768', '../../assets/images/barzeer.jpg', [])
  ];
  
  // The ContactListComponent needs to recognize whent the end user clicks on a contact in the contact list
  // and call the method that will emit a custom event with the selected Contact in it.

  // Create a new custom EventEmitter with Contact as the data type
  @Output() selectedContactEvent: EventEmitter<Contact> = new EventEmitter<Contact>();

  onContactSelected(contact: Contact) {
    this.selectedContactEvent.emit(contact);
  }

}
