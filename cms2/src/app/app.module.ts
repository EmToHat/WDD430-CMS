import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { DocumentsComponent } from './documents/documents.component';
import { MessagesComponent } from './messages/messages.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactItemComponent } from './contacts/contact-list/contact-item/contact-item.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentItemComponent } from './documents/document-list/document-item/document-item.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { MessageEditComponent } from './messages/message-edit/message-edit.component';
import { MessageItemComponent } from './messages/message-list/message-item/message-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    DocumentsComponent,
    MessagesComponent,
    ContactListComponent,
    ContactDetailComponent,
    ContactItemComponent,
    DocumentListComponent,
    DocumentItemComponent,
    DocumentDetailComponent,
    MessageListComponent,
    MessageEditComponent,
    MessageItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
