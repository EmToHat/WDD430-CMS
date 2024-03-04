import { Component, Input } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})

export class ContactDetailComponent {
  @Input() contact: Contact;

  /*
  constructor() { }

  ngOnInit() {
    // Initialize the variable with an example Contact or fetch it from a service
    this.selectedContact = new Contact('1', 'John Doe', 'john.doe@example.com', '123-456-7890', '../../../assets/images/barzeer.jpg', []);
  }
  */
}
