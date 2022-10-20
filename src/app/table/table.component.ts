import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { NestService } from '../nest.service';
import { Nest } from '../nest';


// const ELEMENT_DATA: Nest[] = [];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  nests: Nest[] = [];
  displayedColumns: string[] = ['Nest ID', 'Place', 'Year', 'Link to place'];
  dataToDisplay = [...this.nests];

  dataSource = new ExampleDataSource(this.dataToDisplay);


  constructor(private nestService: NestService){
    this.getNests();
  }




  getNests(): void {
    // this.nests = this.nestService.getNests();
    this.nestService.getNests().subscribe(
      (data: Nest) => this.nests);
  }

}

class ExampleDataSource extends DataSource<Nest> {
  private _dataStream = new ReplaySubject<Nest[]>();

  constructor(initialData: Nest[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<Nest[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: Nest[]) {
    this._dataStream.next(data);
  }
}
