import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact-model';
import { ContactService } from '../contacts.service';
import { WindRefService } from '../../wind-ref.service';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {
  contact: Contact;
  nativeWindow: any;

  constructor(private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute,
    private windRefService: WindRefService) {}

  ngOnInit() {
    this.nativeWindow = this.windRefService.getNativeWindow(); // Assign window object to nativeWindow
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.contact = this.contactService.getContact(id);
    });
  }

  /*
  onView() {
    const url = this.contact.url; // Get the value of the url property of the Document object
    this.nativeWindow.open(url); // Open a new tab in the browser and link to the document's URL
  }
  */
 
  onDelete() {
    this.contactService.deleteContact(this.contact);
    this.router.navigate(['/contacts']); // Route back to the '/documents' URL
  }
}
