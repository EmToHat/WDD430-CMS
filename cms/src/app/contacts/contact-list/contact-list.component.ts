// Child Components: ContactItemComponent
// Sibling Component: ContactDetailComponent

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})

export class ContactListComponent {
  contacts: Contact[] = [];
  contactId: string;

  constructor(private contactsService: ContactsService,
              private router: Router,
              private route: ActivatedRoute) {
    this.contacts = this.contactsService.getContacts();
  }

  ngOnInit() {
    this.contactsService.contactChangedEvent
      .subscribe(
        (contacts: Contact[]) => {
          this.contacts = contacts;
        }
      );
  }

  onNewContact(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
