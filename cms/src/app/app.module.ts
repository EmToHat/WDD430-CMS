import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Header
import { HeaderComponent } from './header/header.component';

// Contacts
import { ContactsComponent } from './contacts/contacts.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactItemComponent } from './contacts/contact-list/contact-item/contact-item.component';

// Documents
import { DocumentsComponent } from './documents/documents.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentItemComponent } from './documents/document-list/document-item/document-item.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';

// Messages
import { MessagesComponent } from './messages/messages.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { MessageEditComponent } from './messages/message-edit/message-edit.component';
import { MessageItemComponent } from './messages/message-list/message-item/message-item.component';

// Directives
import { DropdownDirective } from './common/dropdown.directive';
import { MobileDropdownDirective } from './common/mobile-dropdown.directive';

// Services
import { ContactService } from './contacts/contacts.service';
import { DocumentService } from './documents/documents.service';
import { MessageService } from './messages/messages.service';

@NgModule({
  declarations: [
    // App
    AppComponent,

    // Header
    HeaderComponent,

    // Contacts
    ContactsComponent,
    ContactListComponent,
    ContactDetailComponent,
    ContactItemComponent,

    // Documents
    DocumentsComponent,
    DocumentListComponent,
    DocumentItemComponent,
    DocumentDetailComponent,

    // Messages
    MessagesComponent,
    MessageListComponent,
    MessageEditComponent,
    MessageItemComponent,

    // Directives
    DropdownDirective,
    MobileDropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    // Services
    ContactService,
    DocumentService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
