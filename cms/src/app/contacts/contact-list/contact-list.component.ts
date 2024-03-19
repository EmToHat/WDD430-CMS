import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Contact } from '../contact-model';
import { ContactService } from '../contacts.service';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = []; // Initialize with an empty array

  // Inject the ContactService in the constructor
  constructor(private contactService: ContactService) {}

  ngOnInit() {
    //console.log('ContactListComponent: Initialized!')

    // Call the getContacts method in the ContactService
    this.contacts = this.contactService.getContacts();

    //console.log('ContactListComponent - Contacts: ', this.contacts);
  }

  
  // Method to handle the selection of a contact and emit the event
  onSelectedContact(contact: Contact) {
    console.log('ContactListComponent - Contact Selected: ', contact);
    this.contactService.onSelected(contact);
  }
  
}
