import { EventEmitter, Injectable } from '@angular/core';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Document } from './document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  documents: Document[] = [];

  constructor() { 
    this.documents = MOCKDOCUMENTS;
  }

  documentSelectedEvent: EventEmitter<Document> = new EventEmitter<Document>();
  documentChangedEvent: EventEmitter<Document[]> = new EventEmitter<Document[]>();

  getDocuments(): Document[] {
    //console.log('getDocuments() method called');
    const documents = this.documents.slice();
    //console.log('Documents from service: ', documents);
    return documents;
  }

  getDocument(id: string){
    const document = this.documents.find((document) => document.id === id);
    return document;
  }

  deleteDocument(document: Document) {
    if (!document) {
      return;
    }
    const pos = this.documents.indexOf(document);
    if (pos < 0) {
      return;
    }
    this.documents.splice(pos, 1);
    this.documentChangedEvent.emit(this.documents.slice());
  }

  onSelected(document: Document) {
    this.documentSelectedEvent.emit(document);
  }
}
