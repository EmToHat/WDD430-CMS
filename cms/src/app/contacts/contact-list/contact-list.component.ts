import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact-model';
import { ContactService } from '../contacts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  term: string = '';
  contacts: Contact[] = []; // Initialize with an empty array
  subscription: Subscription;

  // Inject the ContactService in the constructor
  constructor(private contactService: ContactService, 
    private router: Router,
    private route: ActivatedRoute) {}

    ngOnInit() {
      // Subscribe to the observable to get the initial contacts data
      this.subscription = this.contactService.getContacts().subscribe(
        (contacts: Contact[]) => {
          this.contacts = contacts;
        }
      );
  
      // Subscribe to contactChangedEvent to update contacts when they change
      this.contactService.contactChangedEvent.subscribe(
        (contacts: Contact[]) => {
          this.contacts = contacts;
        }
      );
  
      // Subscribe to contactsChanged to update contacts when they change
      this.contactService.contactsChanged.subscribe(
        (updatedContacts: Contact[]) => {
          this.contacts = updatedContacts;
        }
      );
    }

  search(value: string) {
    this.term = value; // Assign the input parameter value to the term property
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // Method to handle the selection of a contact and emit the event
  onSelectedContact(contact: Contact) {
    this.contactService.contactSelectedEvent.emit(contact);
    this.router.navigate([contact.id], {relativeTo: this.route})
  }
  
}
