// mobile-dropdown.directive.ts

import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appMobileDropdown]'
})
export class MobileDropdownDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    const navbarCollapse = document.getElementById('bs-example-navbar-collapse-1');
    if (navbarCollapse) {
      // Toggle the 'in' class to show/hide the mobile menu
      if (navbarCollapse.classList.contains('in')) {
        this.renderer.removeClass(navbarCollapse, 'in');
      } else {
        this.renderer.addClass(navbarCollapse, 'in');
      }
    }
  }
}
