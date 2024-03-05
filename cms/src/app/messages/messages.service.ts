import { EventEmitter, Injectable } from "@angular/core";
import { Message } from "./message.model";
import { MOCKMESSAGES } from "../../assets/mock/MOCKMESSAGES";

@Injectable({
  providedIn: 'root'
})

export class MessageService{
  messageSelectedEvent = new EventEmitter<Message>();
  messageChangedEvent = new EventEmitter<Message[]>();

  messages: Message[] = [];

  constructor() {
    this.messages = MOCKMESSAGES;
  }

  getMessages(){
    return this.messages.slice();
  }

  getMessage(id: string): Message{
    // for(let message of this.messages){
    //   if(message.id === id){
    //     return message;
    //   }
    // }
    // return null;
    return this.messages.find(message => message.id === id) || null;
  }

  addMessage(message: Message){
    this.messages.push(message);
    this.messageChangedEvent.emit(this.messages.slice());
  }

}

