import { Component, Input } from '@angular/core';
import { Message } from '../../message-model';

@Component({
  selector: 'cms2-message-item',
  templateUrl: './message-item.component.html',
  styleUrl: './message-item.component.css'
})
export class MessageItemComponent {
  @Input() message: Message;
}
