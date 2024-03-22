import { Component } from '@angular/core';
import { Message }  from '../message-model';
import { MessageService } from '../messages.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent {
  // Define a class variable named messages
  messages: Message[] = [];
  subscription: Subscription;

  constructor(private messageService: MessageService) {}


  ngOnInit() {
    // Subscribe to messageChangedEvent to update messages when they change
    this.subscription = this.messageService.messageChangedEvent.subscribe(
      (messages: Message[]) => {
        this.messages = messages;
      }
    );
  
    this.messageService.getMessages().subscribe(
      (messages: Message[]) => {
        this.messages = messages;
      }
    );
  }

  ngOnDestroy() {
    // Unsubscribe from the subscription to prevent memory leaks
    this.subscription.unsubscribe();
  }
}
