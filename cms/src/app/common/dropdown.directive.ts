// dropdown.directive.ts

import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]' // Selector to apply the directive
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false; // Binds the 'open' class dynamically based on isOpen property

    @HostListener('click') toggleOpen() {
    // Listens for 'click' event and toggles the isOpen property
    this.isOpen = !this.isOpen;
}

    // ElementRef: Gives access to the host element
  // Renderer2: Provides a way to interact with the DOM in a way that's safe for server-side rendering
    constructor(private elRef: ElementRef, private renderer: Renderer2) { }
}
