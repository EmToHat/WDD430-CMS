import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cms-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrl: './document-edit.component.css'
})
export class DocumentEditComponent implements OnInit {
onSubmit(_t7: any) {
throw new Error('Method not implemented.');
}
  originalDocument: Document;
  document: Document;
  editMode: boolean = false;

  url: string;

  ngOnInit() {
    this.document = new Document(); // Assuming Document has a constructor
    this.editMode = false;
  }
}
