import { Component, Input } from '@angular/core';
import { Document } from '../../document.model';
import { DocumentService } from '../../documents.service';

@Component({
  selector: 'cms-document-item',
  templateUrl: './document-item.component.html',
  styleUrl: './document-item.component.css'
})
export class DocumentItemComponent {
  // Define the input variable
  @Input() document: Document;

  constructor(private documentService: DocumentService) {}
    
  onSelected() {
    this.documentService.documentSelectedEvent.emit(this.document);
  }

}
