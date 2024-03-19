import { Component, Input } from '@angular/core';
import { Contact } from '../../contact-model';
import { ContactService } from '../../contacts.service';

@Component({
  selector: 'cms-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css'],
})
export class ContactItemComponent {
  // Define the input variable
  @Input() contact: Contact;

  constructor(private contactService: ContactService) {}

  onSelected() {
    //console.log('ContactItemComponent: Selected contact:', this.contact);
    this.contactService.contactSelectedEvent.emit(this.contact);
  }
}
