import { Injectable } from '@angular/core';
import { Video } from './video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  sample_array: Video[] = [
    {    
      video_id: "vid_001",
      bird_id: "bird_1",
      video_part: 1,
      date: new Date(),
      coordinates: "37°25'19.07''N, 122°05'06.24''W",
      filepath: "C:\Users\pinak\Documents\IT-Recht\Ausarbeitung"
    },
    {  
      video_id: "vid_009",
      bird_id: "bird_7",
      video_part: 1,
      date: new Date(),
      coordinates: "37°25'19.07''N, 122°05'06.24''W",
      filepath: "C:\Users\pinak\Videos\IT-Recht\BirdVideo"
    }
  ];

  constructor() { }

  getVideo(){
    return this.sample_array;
  }



}
