import { Component } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrl: './document-detail.component.css'
})
export class DocumentDetailComponent {
  // Define the variable to store the list of documents.
  public documents: Document[] = [];

}
