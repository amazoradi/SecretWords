import { HttpClient } from '@angular/common/http';
import { Injectable, ɵConsole } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { Card } from '../../state/game.models';

@Injectable()
export class CardService {
  jsonUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getAllCards(): Observable<Card[]> {
    const url = this.jsonUrl + 'cards';
    console.log("in api call")
    return this.http.get<Card[]>(url);
  }
}
