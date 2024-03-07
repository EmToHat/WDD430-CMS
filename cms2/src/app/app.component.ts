import { Component } from '@angular/core';

@Component({
  selector: 'cms2-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cms2';

  // Add a class variable named selectedFeature of the string datatype.
  selectedFeature: string = 'messages';

  // Method to switch the view based on the selected feature.
  switchView(selectedFeature: string) {
    // Assign the value of the selectedFeature input parameter to the class variable.
    this.selectedFeature = selectedFeature;
  }
}
