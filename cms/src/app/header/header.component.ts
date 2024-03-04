import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cms-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //  create a new event emitter - Bro. Del Sol version
  @Output() selectedFeatureEvent = new EventEmitter<string>();
  
  // version from recipe book
  // @Output() featureSelected = new EventEmitter<string>();

  //  navigation toggles
  isUserDropdownOpen: boolean = false;
  isNavbarCollapsed: boolean = true;

  toggleUserDropdown() {
    this.isUserDropdownOpen = !this.isUserDropdownOpen;
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  //  create method reponsible for emitting the selectedFeatureEvent.
  //  Bro. Del Sol version
  onSelected(selectedEvent: string) {
    this.selectedFeatureEvent.emit(selectedEvent);
  }

  // version from recipe book
  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }
  collapsed = true;
}