// Parent Component
// Children Components: Contact List and Contact Detail.

import { Component } from '@angular/core';
import { Contact } from '../contacts/contact-model';

@Component({
  selector: 'cms-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  selectedContact: Contact;
}
