import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cms-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // Create a new EventEmitter object of the string data type.
  @Output() selectedFeatureEvent: EventEmitter<string> = new EventEmitter<string>();

  // Create a method to emit the selectedFeatureEvent.
  onSelected(selectedEvent: string) {
    // Call the emit() method on the selectedFeatureEvent emitter.
    // Pass it the value of the selectedEvent input parameter.
    this.selectedFeatureEvent.emit(selectedEvent);
  }
}
