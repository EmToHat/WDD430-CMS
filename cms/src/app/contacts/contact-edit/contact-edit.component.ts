import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact-model';
import { ContactService } from '../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'cms-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit{
  originalContact: Contact;
  contact: Contact;
  groupContacts: Contact[] = [];
  editMode: boolean = false;
  id: string;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.id = params['id'];
        if (!this.id) {
          this.editMode = false;
          return;
        }
        this.originalContact = this.contactService.getContact(this.id);
        if (!this.originalContact) {
          return;
        }
        this.editMode = true;
        // Clone the original contact
        this.contact = JSON.parse(JSON.stringify(this.originalContact));
        // Clone group contacts if they exist
        if (this.contact.group) {
          this.groupContacts = JSON.parse(JSON.stringify(this.contact.group));
        }
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    this.contact = new Contact(
      value.id,
      value.name,
      value.email,
      value.phone,
      value.imageUrl,
      value.group
    );

    if (this.editMode) {
      // Update existing contact
      this.contactService.updateContact(this.originalContact, this.contact);
    } else {
      // Add new contact
      this.contactService.addContact(this.contact);
    }
    // Redirect back to contacts page
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onCancel() {
    // Navigate back to contacts page
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onContactDropped(event: CdkDragDrop<Contact[]>) {
    const draggedContact = event.item.data;
    if (!this.groupContacts.includes(draggedContact)) {
      this.groupContacts.push(draggedContact);
    }
  }
  
}
