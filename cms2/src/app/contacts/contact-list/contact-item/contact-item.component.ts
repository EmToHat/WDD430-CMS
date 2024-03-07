import { Component, Input } from '@angular/core';
import { Contact } from '../../contact-model';

@Component({
  selector: 'cms-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.css'
})
export class ContactItemComponent {
  // The @Input decorator is used to define an input property for the Angular component.
  // In this context, the 'contact' property allows external components, such as the parent
  // ContactListComponent, to bind a Contact object to this ContactItemComponent. 
  // The property is marked with @Input to indicate that it can receive data from the outside.
  // When a contact is passed to this component using property binding, it can be accessed
  // within the ContactItemComponent class, enabling dynamic rendering based on the provided data.
  @Input() contact: Contact;
}
