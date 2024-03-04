import { Component } from '@angular/core';

@Component({
  selector: 'cms-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cms';
  // implement selected feature with the switchview method
  selectedFeature: string;
  // implement the switchView method

  switchView(selectedFeature: string) {
    if (this.selectedFeature?.toUpperCase() !== selectedFeature.toUpperCase()) {
      this.selectedFeature = selectedFeature;
    }
  }

}