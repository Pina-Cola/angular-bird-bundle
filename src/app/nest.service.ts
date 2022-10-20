import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Nest } from './nest';


@Injectable({
  providedIn: 'root'
})

export class NestService {

  configUrl = 'http://localhost:5000/api';

  // jsonObject: JSON;

  /* nest_array: Nest[] = [
    {    
      nest_id: "120",
      place: "Field in Umeå",
      year: 2022,
      link: "http://localhost:4200/",
      crop: "corn",
    },
    {    
      nest_id: "430",
      place: "Umeå, forest",
      year: 2021,
      link: "skribbl.io",
      crop: "weeds",
    }
  ]; */


  constructor(private http: HttpClient) {
    this.getNests();
    // this.jsonObject = <JSON><unknown>this.getNests;
   }


  getNests() {
    console.log("Nestaufruf");
    this.http.get(this.configUrl).subscribe(data => {
      console.log(data)});
    return this.http.get<Nest>(this.configUrl).pipe(map((response: any) => response.json()));
  }


}
