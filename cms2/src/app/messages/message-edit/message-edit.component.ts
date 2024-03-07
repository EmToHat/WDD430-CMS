import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Message } from '../message-model';

@Component({
  selector: 'cms2-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css'
})
export class MessageEditComponent {
  // Declare and Initialize the currentSender variable
  currentSender: string = 'Emilee Hatch'; 

  @ViewChild('subjectRef') subjectRef: ElementRef;
  @ViewChild('msgTextRef') msgTextRef: ElementRef;

  @Output() addMessageEvent = new EventEmitter<Message>();

  // Logic to handle sending the message
  onSendMessage() {
    //console.log('Send button clicked!');

    // Get the values from the input elements
    const subjectValue: string = this.subjectRef.nativeElement.value;
    const msgTextValue: string = this.msgTextRef.nativeElement.value;

    // Create a new Message object
    const newMessage: Message = {
      id: '1',
      sender: this.currentSender,
      subject: subjectValue,
      msgText: msgTextValue
    };

    // Emit the newMessage using the custom event
    this.addMessageEvent.emit(newMessage);

    // Clear the form after sending the message.
    this.onClear();
  }

  // Logic to clear the form
  onClear() {
    //console.log('Clear button clicked!');

    this.subjectRef.nativeElement.value = '';
    this.msgTextRef.nativeElement.value = '';
  }
}
