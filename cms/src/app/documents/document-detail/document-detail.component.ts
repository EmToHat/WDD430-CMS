import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Document } from '../document.model';
import { DocumentService } from '../documents.service';
import { WindRefService } from '../../wind-ref.service';

@Component({
  selector: 'cms-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css'],
})
export class DocumentDetailComponent {
  document: Document;
  nativeWindow: any; // Define a new property nativeWindow

  constructor(private documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute,
    private windRefService: WindRefService) {}

  ngOnInit() {
    this.nativeWindow = this.windRefService.getNativeWindow(); // Assign window object to nativeWindow
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.document = this.documentService.getDocument(id);
    });
  }

  onView() {
    const url = this.document.url; // Get the value of the url property of the Document object
    this.nativeWindow.open(url); // Open a new tab in the browser and link to the document's URL
  }

  onDelete() {
    this.documentService.deleteDocument(this.document);
    this.router.navigate(['/documents']); // Route back to the '/documents' URL
  }
}
