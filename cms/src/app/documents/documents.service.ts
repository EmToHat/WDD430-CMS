import { EventEmitter, Injectable } from '@angular/core';
import { MOCKDOCUMENTS } from '../../assets/mock/MOCKDOCUMENTS';
import { Document } from '../documents/document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  documentSelectedEvent = new EventEmitter<Document>();

  documents: Document[] = [];

  constructor() {
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(){
    return this.documents.slice();
  }

  getDocument(id: string): Document{
    for(let document of this.documents){
      if(document.id === id){
        return document;
      }
    }
    return null;
  }
}
