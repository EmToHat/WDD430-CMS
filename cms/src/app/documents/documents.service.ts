import { EventEmitter, Injectable } from '@angular/core';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Document } from './document.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private documents: Document[] = [];
  maxDocumentId: number;

  constructor() { 
    this.documents = MOCKDOCUMENTS;
    //this.documents = [];
    this.maxDocumentId = this.getMaxId();
  }

  documentSelectedEvent: EventEmitter<Document> = new EventEmitter<Document>();
  documentChangedEvent: EventEmitter<Document[]> = new EventEmitter<Document[]>();
  documentListChangedEvent = new Subject<Document[]>();

  getMaxId(): number {
    let maxId = 0;

    for (const document of this.documents) {
      const currentId = parseInt(document.id);
      if (!isNaN(currentId) && currentId > maxId) {
        maxId = currentId;
      }
    }

    return maxId;
  }

  addDocument(newDocument: Document) {
    if (!newDocument) {
      return;
    }

    this.maxDocumentId++;
    newDocument.id = String(this.maxDocumentId);
    this.documents.push(newDocument);
    const documentsListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentsListClone);
  }

  updateDocument(originalDocument: Document, newDocument: Document) {
    if (!originalDocument || !newDocument) {
      return;
    }

    const pos = this.documents.indexOf(originalDocument);
    if (pos < 0) {
      return;
    }

    newDocument.id = originalDocument.id;
    this.documents[pos] = newDocument;
    const documentsListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentsListClone);
  }

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
    const documentsListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentsListClone);
  }

  onSelected(document: Document) {
    this.documentSelectedEvent.emit(document);
  }
}
