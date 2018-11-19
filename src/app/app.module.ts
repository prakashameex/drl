import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AllocationComponent } from './allocation/allocation.component';
import {MatGridListModule,MatSortModule,MatTableModule,MatButtonModule, MatCheckboxModule,MatSelectModule,MatNativeDateModule,MatFormFieldModule,MatDatepickerModule, MatInputModule} from '@angular/material';
import {InfiniteScrollModule} from 'ngx-infinite-scroll'
import { HttpClientInMemoryWebApiModule, HttpInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryService} from './in-memory.service'
import {DrlService} from './drl.service'
import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AllocationComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MatTableModule,MatSortModule,MatButtonModule, MatCheckboxModule,MatDatepickerModule,MatSelectModule,MatNativeDateModule,MatFormFieldModule,MatInputModule,FormsModule,MatGridListModule,ReactiveFormsModule,InfiniteScrollModule,HttpClientInMemoryWebApiModule,HttpModule,HttpClientModule,
   HttpInMemoryWebApiModule.forRoot(
      InMemoryService, { dataEncapsulation: false }
    )
  ],
  providers: [InMemoryService,DrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
