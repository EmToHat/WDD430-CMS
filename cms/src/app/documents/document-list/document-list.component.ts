import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
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
  subscription: Subscription;

  constructor(private documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute) {}

    ngOnInit() {
      // Subscribe to getDocuments() to retrieve the initial documents data
      this.subscription = this.documentService.getDocuments().subscribe(
        (documents: Document[]) => {
          this.documents = documents;
        }
      );
  
      // Subscribe to documentChangedEvent to update documents when they change
      this.documentService.documentChangedEvent.subscribe(
        (documents: Document[]) => {
          this.documents = documents;
        }
      );
  
      // Subscribe to documentListChangedEvent to update documents when the list changes
      this.documentService.documentListChangedEvent.subscribe(
        (documentsList: Document[]) => {
          this.documents = documentsList;
        }
      );
    }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSelected(document: Document) {
    this.documentService.documentSelectedEvent.emit(document);
    this.router.navigate([document.id], {relativeTo: this.route})
  }
}
