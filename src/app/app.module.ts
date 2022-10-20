import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './table/table.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
