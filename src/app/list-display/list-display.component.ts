import { Component, Input, OnInit } from '@angular/core';

import { query, stagger, animate, keyframes,
  style, transition, trigger } from '@angular/animations';

  import { RANDOM_ITEMS } from '../vars';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ListDisplayComponent implements OnInit {

  items: any[] = [];

  constructor() {
    this.items = this._getRandomItems();
  }

  ngOnInit() {
  }

  public toggleStagger() {
    if (this.items.length > 0) {
      this.items = [];
    } else {
      this.items = this._getRandomItems();
    }
  }

  private _getRandomItems(): any[] {
    const randomItems = [];
    const count = 20; 
    for (let i = 0; i < count; i++) {
      randomItems.push(RANDOM_ITEMS[Math.floor(Math.random() * RANDOM_ITEMS.length)]);
    }
    return randomItems;

  }
}
