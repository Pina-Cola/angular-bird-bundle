import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscribable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Nest } from './nest';


@Injectable({
  providedIn: 'root'
})

export class NestService {

  configUrl = 'http://localhost:5000/api';



  constructor(private http: HttpClient) {
   }

  getNests(): Observable<any>{
    return this.http.get(this.configUrl);
  }




}


