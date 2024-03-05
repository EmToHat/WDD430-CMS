import { Component } from '@angular/core';
import { Contact } from '../contact-model';

@Component({
  selector: 'cms2-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent {
  // Define the variable to store the list of contacts.
  public contacts: Contact[] = [];
}
