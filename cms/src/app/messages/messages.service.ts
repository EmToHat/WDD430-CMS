import { EventEmitter, Injectable } from '@angular/core';
import { Message } from './message-model';
import { MOCKMESSAGES } from './MOCKMESSAGES';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[] = [];
  
  messageChangedEvent = new EventEmitter<Message[]>();

  constructor() { 
    this.messages = MOCKMESSAGES;
  }

  getMessages() {
    const messages = this.messages.slice();
    return messages;
  }
  
  getMessage(id: string) {
    const message = this.messages.find((message) => message.id === id);
    return message;
  }

  addMessage(message: Message) {
    this.messages.push(message);

    this.messageChangedEvent.emit(this.messages.slice());
  }
}

