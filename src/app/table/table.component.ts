import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';


export interface Bird {
  name: string;
  position: number;
  weight: number;
  ring: boolean;
}

const ELEMENT_DATA: Bird[] = [
  {position: 1, name: 'Dove', weight: 1.0079, ring: true},
  {position: 2, name: 'Woodpecker', weight: 4.0026, ring: true},
  {position: 3, name: 'Robin', weight: 6.941, ring: false},
  {position: 4, name: 'Crow', weight: 9.0122, ring: true},
  {position: 5, name: 'Starling', weight: 10.811, ring: true},
  {position: 6, name: 'Sparrow', weight: 12.0107, ring: false},
  {position: 7, name: 'Finch', weight: 14.0067, ring: true},
  {position: 8, name: 'Amsel', weight: 15.9994, ring: true},
  {position: 9, name: 'Drossel', weight: 18.9984, ring: true},
  {position: 10, name: 'Fink', weight: 20.1797, ring: true},
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'ring'];
  dataToDisplay = [...ELEMENT_DATA];

  dataSource = new ExampleDataSource(this.dataToDisplay);

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA[randomElementIndex]];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }

}

class ExampleDataSource extends DataSource<Bird> {
  private _dataStream = new ReplaySubject<Bird[]>();

  constructor(initialData: Bird[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<Bird[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: Bird[]) {
    this._dataStream.next(data);
  }
}
