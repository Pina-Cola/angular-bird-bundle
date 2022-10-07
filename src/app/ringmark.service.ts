import { Injectable } from '@angular/core';
import { Ringmark } from './ringmark';

@Injectable({
  providedIn: 'root'
})
export class RingmarkService {

  ringmark_array: Ringmark[] = [
    {    
      bird_id: "bird_1",
      bird_type: "Raven",
      bird_age: 3,
      adress: "Field in front of a building",
      city: "Umeå",
      attachmentDate: new Date(),
      maps_link: "http://localhost:4200/",
      coordinates: "37°25'19.07''N, 122°05'06.24''W"
    },
    {    
      bird_id: "bird_7",
      bird_type: "Robin",
      bird_age: 1,
      adress: "Field at Storgatan 8",
      city: "Umeå",
      attachmentDate: new Date(),
      maps_link: "http://localhost:4200/somePlace",
      coordinates: "37°25'19.07''N, 122°05'06.24''W"
    }
  ];

  constructor() { }
}
