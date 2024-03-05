import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../messages.service';

// declare a message property to store the form values
message: Message;

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent implements OnInit {

  messages: Message[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messages = this.messageService.getMessages();
    this.messageService.messageChangedEvent.subscribe(
      (messages: Message[]) => {
        this.messages = messages;
      }
    );
  }

  // add a message to the message list
  onAddMessage(message: Message) {
    this.messages.push(message);
  }

}