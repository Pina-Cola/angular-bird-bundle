import { Injectable } from '@angular/core';
import { Report } from './report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  report_array: Report[] = [
    {    
      bird_id: "bird_1",
      observation: "It is a small bird with big wings."
    },
    {    
      bird_id: "bird_7",
      observation: "The bird is behaving a bit weird but who am I to define what a normal bird should behave like?"
    }
  ];

  constructor() { }

  getReport(){
    return this.report_array;
  }



}
