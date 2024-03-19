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

  onSelected(document: Document) {
    this.documentSelectedEvent.emit(document);
  }
}
