import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { NestService } from '../nest.service';
import { map } from 'rxjs/operators';
import { Nest } from '../nest';




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent{

  listNests!: Nest[];

  constructor(private nestService: NestService){

  }

  ngOnInit(){
    this.fetchNest();
  }

  dataSource: any;

  fetchNest(){
    this.nestService.getNests().subscribe( data =>{
      this.listNests = data.nests
      this.dataSource = new MatTableDataSource(this.listNests)
      console.log('list of nests', this.listNests);
      console.log(this.dataSource);
    })
  }


  displayedColumns: string[] = ['nest_id', 'place', 'link'];
  // dataSource = new MatTableDataSource<Nest>();


}




