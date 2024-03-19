import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../message-model';
import { ContactService } from '../../../contacts/contacts.service';
import { Contact } from '../../../contacts/contact-model';

@Component({
  selector: 'cms-message-item',
  templateUrl: './message-item.component.html',
  styleUrl: './message-item.component.css',
  providers: [ContactService],
})
export class MessageItemComponent implements OnInit {
  @Input() message: Message;

  messageSender: string;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    const contact: Contact = this.contactService.getContact(this.message.sender);

    if (contact == null) {
      this.messageSender = 'Emilee Hatch';
    } else {
      this.messageSender = contact ? contact.name : '';
    }
  }
}

