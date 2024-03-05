import { Component, Input } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'cms-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.css'
})
export class ContactItemComponent {
  // Define a class input variable named 'contact'
  @Input() contact: Contact;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
  }

  onSelected(contact: Contact){
    if (!contact.name.includes('team')) {
      // Emit the event or handle the click only if it is not a team header
      this.contactsService.contactSelectedEvent.emit(contact);
    } else {
      // If it is a team header, clear the selected contact
      this.contactsService.contactSelectedEvent.emit(null);
    }
  }
}
