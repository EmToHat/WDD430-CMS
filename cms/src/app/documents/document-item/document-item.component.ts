import { Component, Input, OnInit } from '@angular/core';
import { Document } from '../document.model';
import { DocumentsService } from '../documents.service';

@Component({
  selector: 'cms-document-item',
  templateUrl: './document-item.component.html',
  styleUrl: './document-item.component.css'
})
export class DocumentItemComponent {
  @Input() document: Document;

  constructor(private documentsService: DocumentsService) { }

  ngOnInit() {
  }

  onSelected(document: Document){
    this.documentsService.documentSelectedEvent.emit(document);
  }
}