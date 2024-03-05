import { Component, Input } from '@angular/core';
import { Contact } from '../contact.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})

export class ContactDetailComponent {
  contact: Contact;
  id: string;

  constructor(private contactsService: ContactsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.contact = this.contactsService.getContact(this.id);
        }
      );
  }

  onDelete() {

    if (window.confirm('Are you sure you want to delete the contact for ' + this.contact.name + '?')) {
      this.contactsService.deleteContact(this.contact);
      this.router.navigate(['/contacts']);
    } else {;
      return;
    }
  }
}
