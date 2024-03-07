import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact-model';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  // Define the variable to store the list of contacts.
  public contacts: Contact[] = [];

  // Create a new custom EventEmitter with Contact as the data type
  @Output() selectedContactEvent: EventEmitter<Contact> = new EventEmitter<Contact>();

  // Method to handle the selection of a contact and emit the event
  onSelected(contact: Contact) {
    this.selectedContactEvent.emit(contact);
  }

  // Initialize the array with 2 dummy contact objects.
  constructor() {
    this.contacts = [
      new Contact('1', 'R. Kent Jackson', 'jacksonk@byui.edu', '208-496-3771', '../../../assets/images/jacksonk.jpg'),
      new Contact('2', 'Rex Barzee', 'barzeer@byui.edu', '208-496-3768', '../../../assets/images/barzeer.jpg')
    ]
  }
}
