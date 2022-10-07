import { Injectable } from '@angular/core';
import { Image } from './image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  image_array: Image[] = [
    {    
      filepath: "C:\Users",
      date: new Date(),
      coordinates: "37°25'19.07''N, 122°05'06.24''W"
    },
    {    
      filepath: "C:\Users\pinak\Documents\IT-Recht\Ausarbeitung",
      date: new Date(),
      coordinates: "07°25'19.0''N, 102°05'06.24''W"
    }
  ];

  constructor() { }

  getImage(){
    return this.image_array;
  }



}
