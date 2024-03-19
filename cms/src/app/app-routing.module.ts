import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentsComponent } from './documents/documents.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';

import { MessageListComponent } from './messages/message-list/message-list.component';
import { ContactsComponent } from './contacts/contacts.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/documents', pathMatch: 'full' },
    { path: 'documents', component: DocumentsComponent, children: [
        { path: 'new', component: DocumentEditComponent },
        { path: ':id', component: DocumentDetailComponent },
        { path: ':id/edit', component: DocumentEditComponent }
    ] },
    { path: 'messages', component: MessageListComponent },
    { path: 'contacts', component: ContactsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
