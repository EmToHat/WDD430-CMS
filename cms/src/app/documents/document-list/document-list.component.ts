import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../documents.service';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit{
  // Define a variable named documents
  documents: Document[] = [];

  constructor(private documentService: DocumentService) { }

  ngOnInit() { 
    this.documents = this.documentService.getDocuments();
  }

  // New method to handle selected document
  onSelectedDocument(document: Document) {
    this.documentService.onSelected(document);
  }
}
