import { Component } from '@angular/core';
import { Message }  from '../message-model';
import { MessageService } from '../messages.service';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent {
  // Define a class variable named messages
  messages: Message[] = [];

  constructor(private messageService: MessageService) {}


  ngOnInit() {
    this.messages = this.messageService.getMessages();

    this.messageService.messageChangedEvent.subscribe((messages: Message[])=>{this.messages = messages})
  }
}
