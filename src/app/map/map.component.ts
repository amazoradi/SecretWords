import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Card } from '../state/game.models';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  cardsInPlay: Card[] = [];
  jsonUrl = 'http://localhost:3000/';

  constructor() {}

  ngOnInit(): void {
    console.log("on map")
    // this.http
    //   .get<Card[]>(this.jsonUrl, {})
    //   .subscribe((cards) => (this.cardsInPlay = cards));
  }
}
  