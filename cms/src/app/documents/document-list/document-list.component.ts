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
      this.documents = this.documentService.getDocuments();
      this.documentService.documentChangedEvent.subscribe((documents: Document[]) => {
        this.documents = documents;
      });

      this.subscription = this.documentService.documentListChangedEvent.subscribe(
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
