import { Component, EventEmitter, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent {
  // Define a variable named documents
  documents: Document[] = [
    {
      id: '1',
      name: 'Document 1',
      description: 'Description for Document 1',
      url: 'https://example.com/document1'
    },
    {
      id: '2',
      name: 'Document 2',
      description: 'Description for Document 2',
      url: 'https://example.com/document2'
    },
    {
      id: '3',
      name: 'Document 3',
      description: 'Description for Document 3',
      url: 'https://example.com/document3'
    },
    {
      id: '4',
      name: 'Document 4',
      description: 'Description for Document 4',
      url: 'https://example.com/document4'
    }
  ];

  // Create a new EventEmitter object of the Document data type
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  // New method to handle selected document
  onSelectedDocument(document: Document) {
    // Emit the selectedDocumentEvent and pass it the document object
    this.selectedDocumentEvent.emit(document);
  }
}
