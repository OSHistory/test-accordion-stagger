import { Component, OnInit } from '@angular/core';

import { query, stagger, animate, keyframes, state,
  style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-toggle-element',
  templateUrl: './toggle-element.component.html',
  styleUrls: ['./toggle-element.component.css'],
  animations: [
    trigger('itemAnimation', [
      state('on', style({
        opacity: 1
      })),
      state('off', style({
        opacity: 0
      })),
      transition('off => on', [
        animate('2s')
      ]),
      transition('on => off', [
        animate('3s')
      ])
    ])
  ]
})
export class ToggleElementComponent implements OnInit {

  state = 'on';
  constructor() { }

  ngOnInit() {
  }

}
