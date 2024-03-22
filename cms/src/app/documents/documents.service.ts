import { EventEmitter, Injectable } from '@angular/core';
//import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Document } from './document.model';
import { Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  documents: Document[] = [];
  maxDocumentId: number;

  documentListChangedEvent: Subject<Document[]> = new Subject<Document[]>();
  documentSelectedEvent: EventEmitter<Document> = new EventEmitter<Document>();
  documentChangedEvent: EventEmitter<Document[]> = new EventEmitter<Document[]>();

  constructor(private http: HttpClient) { 
    this.documents = [];
    this.maxDocumentId = this.getMaxId();
  }

  getDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>('https://wdd430-cms-22cc9-default-rtdb.firebaseio.com/documents');
  }

  private getMaxId(): number {
    return 0;
  }

  getDocument(id: string){
    const document = this.documents.find((document) => document.id === id);
    return document;
  }

  storeDocuments(): void {
    const documentsString = JSON.stringify(this.documents); // Convert documents array to string
    const headers = new HttpHeaders({'Content-Type': 'application/json'}); // Set Content-Type header
    
    this.http.put('https://wdd430-cms-22cc9-default-rtdb.firebaseio.com/documents', documentsString, { headers })
      .pipe(
        catchError((error: any) => {
          console.error('Error storing documents:', error);
          throw error; // Rethrow the error for further handling if needed
        })
      )
      .subscribe(() => {
        // Success method: emit documentListChangedEvent with a cloned copy of documents array
        this.documentListChangedEvent.next(this.documents.slice());
      });
  }

  addDocument(newDocument: Document): void {
    // Add the new document to documents array
    this.documents.push(newDocument);
    // Call storeDocuments() to update the document list on the server
    this.storeDocuments();
  }
  
  deleteDocument(document: Document): void {
    // Find the index of the document to delete
    const index = this.documents.findIndex(doc => doc.id === document.id);
    if (index !== -1) {
      // Remove the document from the array
      this.documents.splice(index, 1);
      // Call storeDocuments() to update the document list on the server
      this.storeDocuments();
    }
  }
  
  updateDocument(originalDocument: Document, newDocument: Document): void {
    // Find the index of the original document
    const index = this.documents.findIndex(doc => doc.id === originalDocument.id);
    if (index !== -1) {
      // Update the document in the array
      this.documents[index] = newDocument;
      // Call storeDocuments() to update the document list on the server
      this.storeDocuments();
    }
  }
  
  onSelected(document: Document) {
    this.documentSelectedEvent.emit(document);
  }
}
