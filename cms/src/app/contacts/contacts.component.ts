// Parent Component
// Children Components: Contact List and Contact Detail.

import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts/contact-model';
import { ContactService } from './contacts.service';

@Component({
  selector: 'cms-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  selectedContact: Contact | null = null;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    //console.log('ContactsComponent: initialized!');

    this.contactService.contactSelectedEvent.subscribe(
      (contact: Contact) => {
        //console.log('ContactsComponent - Contact Selected: ', contact);
        this.selectedContact = contact;
      }
    );
  }
}
