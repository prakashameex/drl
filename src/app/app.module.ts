import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AllocationComponent } from './allocation/allocation.component';
import { FormsModule } from '@angular/forms';
import {MatSortModule,MatTableModule,MatButtonModule, MatCheckboxModule,MatSelectModule,MatNativeDateModule,MatFormFieldModule,MatDatepickerModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AllocationComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MatTableModule,MatSortModule,MatButtonModule, MatCheckboxModule,MatDatepickerModule,MatSelectModule,MatNativeDateModule,MatFormFieldModule,MatInputModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
