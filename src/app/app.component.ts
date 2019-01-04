import { Component } from '@angular/core';

import { RANDOM_ITEMS } from './vars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'test-accordion-stagger';
  items: any[] = [];
}
