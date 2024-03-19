import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
      this.documents = this.documentService.getDocuments();
      this.documentService.documentChangedEvent.subscribe((documents: Document[]) => {
        this.documents = documents;
      });
    }

  onSelected(document: Document) {
    this.documentService.documentSelectedEvent.emit(document);
    this.router.navigate([document.id], {relativeTo: this.route})
  }
}
