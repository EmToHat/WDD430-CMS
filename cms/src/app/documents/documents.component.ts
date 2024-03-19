import { Component } from '@angular/core';
import { Document } from './document.model';
import { DocumentService } from './documents.service';

@Component({
  selector: 'cms-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  // Define the class variable named selectedDocument
  selectedDocument: Document | null = null;

  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    this.documentService.documentSelectedEvent.subscribe(
      (document: Document) => {
        //console.log('Document Selected:', document);
        this.selectedDocument = document;
      }
    );
  }
}
