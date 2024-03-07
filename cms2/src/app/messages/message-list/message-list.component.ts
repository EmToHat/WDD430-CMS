import { Component } from '@angular/core';
import { Message }  from '../message-model';

@Component({
  selector: 'cms2-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent {
  // Define a class variable named messages
  messages: Message[] = [
    {
      id: '1',
      sender: 'John Doe',
      subject: 'Meeting Tomorrow',
      msgText: 'Let\'s discuss the project tomorrow at 10 AM.'
    },
    {
      id: '2',
      sender: 'Alice Smith',
      subject: 'Weekend Plans',
      msgText: 'Any plans for the weekend? Let\'s catch up!'
    },
    {
      id: '3',
      sender: 'Bob Johnson',
      subject: 'Project Update',
      msgText: 'The latest project update is attached. Take a look.'
    }
  ];

  // Method to add a message to the message list
  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
