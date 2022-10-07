import { Injectable } from '@angular/core';
import { Nest } from './nest';

@Injectable({
  providedIn: 'root'
})
export class NestService {


  nest_array: Nest[] = [
    {    
      nest_id: "120",
      place: "Field in Umeå",
      date: new Date(),
      link: "http://localhost:4200/",
      crop: "corn",
    },
    {    
      nest_id: "430",
      place: "Umeå, forest",
      date: new Date(),
      link: "skribbl.io",
      crop: "weeds",
    }
  ];


  constructor() { }
}
