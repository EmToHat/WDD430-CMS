import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private contactService: ContactService, 
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
      this.contactService.contactChangedEvent.subscribe((contacts: Contact[]) => {
        this.contacts = contacts;
      });
  }

  
  // Method to handle the selection of a contact and emit the event
  onSelectedContact(contact: Contact) {
    this.contactService.contactSelectedEvent.emit(contact);
    this.router.navigate([contact.id], {relativeTo: this.route})
  }
  
}
