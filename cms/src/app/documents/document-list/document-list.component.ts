import { Component, EventEmitter, Output } from '@angular/core';
import { Document } from '../document.model';
import { DocumentItemComponent } from '../document-item/document-item.component';


@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent {
  documents: Document[] = [
    new Document("1", "CIT 460 Enterprise Development", "Learn how to develop modern web applications using the MEAN stack", "https://www2.byui.edu/catalog-archive/2011-2012/Computer%20Info%20Tech.pdf", null),
    new Document("2", "CIT 425 Data Warehousing", "Experiment with the principles of enterprise data storage and retrieval", "https://www2.byui.edu/catalog-archive/2011-2012/Computer%20Info%20Tech.pdf", null),
    new Document("2", "CES 499 Senior Project", "Use the principles studied to produce a working product", "https://www2.byui.edu/catalog-archive/2011-2012/Computer%20Info%20Tech.pdf", null),
    new Document("2", "WDD 430 Web Full Stack Development", "Learn how to develop client-server applications", "https://www2.byui.edu/catalog-archive/2011-2012/Computer%20Info%20Tech.pdf", null),
    new Document("2", "CES 430 Architecture Design", "Learn the core principles of producing an SDD", "https://www2.byui.edu/catalog-archive/2011-2012/Computer%20Info%20Tech.pdf", null),
    new Document("2", "CES 410 Software Engineering", "Learn software engineering steps and outcomes", "https://www2.byui.edu/catalog-archive/2011-2012/Computer%20Info%20Tech.pdf", null),
  ];

  @Output() selectedDocumentEvent = new EventEmitter<Document>;

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
