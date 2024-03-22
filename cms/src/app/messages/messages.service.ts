import { EventEmitter, Injectable } from '@angular/core';
import { Message } from './message-model';
import { Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: Message[] = [];
  maxMessageId: number;

  messageListChangedEvent: Subject<Message[]> = new Subject<Message[]>();
  messageSelectedEvent: EventEmitter<Message> = new EventEmitter<Message>();
  messageChangedEvent: EventEmitter<Message[]> = new EventEmitter<Message[]>();

  constructor(private http: HttpClient) { 
    this.messages = [];
    this.maxMessageId = this.getMaxId();
  }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>('https://wdd430-cms-22cc9-default-rtdb.firebaseio.com/messages');
  }

  private getMaxId(): number {
    return 0;
  }

  getMessage(id: string){
    const message = this.messages.find((message) => message.id === id);
    return message;
  }

  storeMessages(): void {
    const messagesString = JSON.stringify(this.messages); // Convert documents array to string
    const headers = new HttpHeaders({'Content-Type': 'application/json'}); // Set Content-Type header
    
    this.http.put('https://wdd430-cms-22cc9-default-rtdb.firebaseio.com/messages', messagesString, { headers })
      .pipe(
        catchError((error: any) => {
          console.error('Error storing messages:', error);
          throw error; // Rethrow the error for further handling if needed
        })
      )
      .subscribe(() => {
        // Success method: emit messageListChangedEvent with a cloned copy of messages array
        this.messageListChangedEvent.next(this.messages.slice());
      });
  }

  addMessage(newMessage: Message): void {
    // Add the new message to message array
    this.messages.push(newMessage);
    // Call storeMessages() to update the message list on the server
    this.storeMessages();
  }
  
  deleteMessage(message: Message): void {
    // Find the index of the message to delete
    const index = this.messages.findIndex(mess => mess.id === message.id);
    if (index !== -1) {
      // Remove the message from the array
      this.messages.splice(index, 1);
      // Call storeMessages() to update the message list on the server
      this.storeMessages();
    }
  }
  
  updateMessage(originalMessage: Message, newMessage: Message): void {
    // Find the index of the original message
    const index = this.messages.findIndex(mess => mess.id === originalMessage.id);
    if (index !== -1) {
      // Update the message in the array
      this.messages[index] = newMessage;
      // Call storeMessages() to update the message list on the server
      this.storeMessages();
    }
  }
  
  onSelected(message: Message) {
    this.messageSelectedEvent.emit(message);
  }
}