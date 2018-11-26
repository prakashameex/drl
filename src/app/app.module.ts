import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
// import { AllocationComponent } from './allocation/allocation.component';
import {MatGridListModule,MatSortModule,MatTableModule,MatButtonModule, MatCheckboxModule,MatSelectModule,MatNativeDateModule,MatFormFieldModule,MatDatepickerModule, MatInputModule,MatTabsModule,MatPaginatorModule} from '@angular/material';
import {InfiniteScrollModule} from 'ngx-infinite-scroll'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import {InMemoryService} from './in-memory.service'
import {DrlService} from './drl.service'
import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SampleComponent } from './sample/sample.component';
import {NgSelectizeModule} from 'ng-selectize';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import  * as $  from 'jquery/dist/jQuery';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    SampleComponent
    // AllocationComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,MatTableModule,MatSortModule,MatButtonModule, MatCheckboxModule,MatDatepickerModule,MatSelectModule,MatNativeDateModule,MatFormFieldModule,MatInputModule,FormsModule,MatGridListModule,ReactiveFormsModule,InfiniteScrollModule,HttpClientInMemoryWebApiModule,HttpModule,HttpClientModule,MatTabsModule,MatPaginatorModule,
    NgSelectizeModule,NgxMatSelectSearchModule
  ],
  providers: [DrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
