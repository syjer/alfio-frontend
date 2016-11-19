import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Result } from './models/result';

@Injectable()
export class ReservationService {

  constructor(private http : Http) { }

  reserve(eventName: string, reservation: any) : Observable<Result<string>> { //FIXME, add model!
    return this.http.post('/api/public/events/' + eventName + '/reserve-tickets', reservation)
      .map(response => response.json() as Result<string>);
  }
}
