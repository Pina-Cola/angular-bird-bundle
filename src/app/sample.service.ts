import { Injectable } from '@angular/core';
import { Sample } from './sample';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  sample_array: Sample[] = [
    {    
      sample_id: "1",
      nest_id: "120",
      sample_type: "bird poop",
      coordinates: "37°25'19.07''N, 122°05'06.24''W"
    },
    {  
      sample_id: "8",
      nest_id: "430",
      sample_type: "feather",
      coordinates: "37°25'19.07''N, 122°05'06.24''W"
    }
  ];

  constructor() { }
}
