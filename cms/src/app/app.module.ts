import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//import { DragDropModule } from '@angular/cdk/drag-drop';
//import {DndModule} from 'ng2-dnd';

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
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { ContactsFilterPipe } from './contacts/contacts-filter.pipe';


// Documents
import { DocumentsComponent } from './documents/documents.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentItemComponent } from './documents/document-list/document-item/document-item.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';


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
import { WindRefService } from './wind-ref.service';

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
    MobileDropdownDirective,
    DocumentEditComponent,
    ContactEditComponent,

    // Pipes
    ContactsFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //DragDropModule,
    //DndModule.forRoot(),
  ],
  providers: [
    // Services
    ContactService,
    DocumentService,
    MessageService,
    WindRefService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }