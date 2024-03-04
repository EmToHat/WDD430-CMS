import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';

// declare a message property to store the form values
message: Message;

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent implements OnInit {

  //  sample list of messages to test the component
  messages: Message[] = [
    new Message('1', 'message 1', 'This is the first message.', 'John Doe'),
    new Message('2', 'message 2', 'This is the 2nd message.', 'Jim Jakes'),
    new Message('3', 'message 3', 'This is the 3rd.', 'Jill Smythson'),
  ];

  constructor() {}

  ngOnInit(): void {}

  // add a message to the message list
  onAddMessage(message: Message) {
    this.messages.push(message);
  }

}