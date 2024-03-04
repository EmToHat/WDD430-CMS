import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css'
})
export class MessageEditComponent {
  //  custom EventEmitter to output the new Message object up to the MessageListComponent.
  @Output() addMessageEvent = new EventEmitter<Message>();

  // We need the values entered in the subject and msgText input elements from the Document Object Model (DOM).
  // Use the @ViewChile property decorator to create an ElementRef for the subject and msgText input elements in the DOM
  @ViewChild('subject') subject: ElementRef;
  @ViewChild('msgText') msgText: ElementRef;

  // Create a string variable named currentSender and initialize it with the value of your name.
  currentSender: string = 'Emilee Hatch';
  cdRef: any;

  constructor() { }

  ngOnInit(): void {}

  onSendMessage() {
    // get the value stored in the subject
    const subject = this.subject.nativeElement.value;
    // get the value stored in the msgText
    const msgText = this.msgText.nativeElement.value;
    // Assign a hardcoded value to the id property of the new Message object.
    const message = new Message('1', subject, msgText, this.currentSender);
    // Call the addMessageEvent.emit() method and pass the new Message object as an argument.
    this.addMessageEvent.emit(message);
}

  onClear() {
    // assign a blank value to the subject and msgText input elements in the form.
    this.subject.nativeElement.value = '';
    this.msgText.nativeElement.value = '';
    this.cdRef.detectChanges();
  }

}