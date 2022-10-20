import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Nest } from './nest';



@Injectable({
  providedIn: 'root'
})
export class NestService {

  configUrl = 'http://localhost:5000/api';

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
   }


  getNests() {
    console.log("Nestaufruf");
    console.log(this.http.get(this.configUrl));
    const nests = this.http.get(this.configUrl);
    return nests;
  }


}
