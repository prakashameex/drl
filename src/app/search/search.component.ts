import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource,MatSort} from '@angular/material';
import { FormControl } from '@angular/forms';
export interface PeriodicElement {
  description: string;
  Assortment:string;
  position: number;
  Campaign: string;
  begindate:string;  
  enddate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, description: 'Tacos',Assortment: 'sample',Campaign: 'test', begindate: 'Wed Oct 12 2014' ,enddate: 'Wed Oct 15 2014' },
  {position: 2, description: 'Steak',Assortment: 'sample',Campaign: 'test', begindate: 'Wed Oct 13 2014' ,enddate: 'Wed Oct 16 2014' },
  {position: 3, description: 'Pizza',Assortment: 'sample',Campaign: 'test', begindate: 'Wed Oct 14 2014' ,enddate: 'Wed Oct 17 2014' },
  {position: 4, description: 'Pizza',Assortment: 'sample',Campaign: 'test', begindate: 'Wed Oct 15 2014' ,enddate: 'Wed Oct 18 2014' },
  {position: 5, description: 'Pizza',Assortment: 'sample',Campaign: 'test', begindate: 'Wed Oct 16 2014' ,enddate: 'Wed Oct 19 2014' },
  {position: 6, description: 'Carbon',Assortment: 'sample',Campaign: 'test', begindate: 'Wed Oct 17 2014' ,enddate: 'Wed Oct 20 2014' },
  {position: 7, description: 'Nitrogen',Assortment: 'sample', Campaign: 'test', begindate: 'Wed Oct 13 2014' ,enddate: 'Wed Oct 21 2014' },
  {position: 8, description: 'Pizza',Assortment: 'sample', Campaign: 'test', begindate: 'Wed Oct 18 2014' ,enddate: 'Wed Oct 22 2014' },
  {position: 9, description: 'Fluorine',Assortment: 'sample', Campaign: 'test', begindate: 'Wed Oct 13 2014' ,enddate: 'Wed Oct 23 2014' },
  {position: 10, description: 'Pizza',Assortment: 'sample', Campaign: 'test', begindate: 'Wed Oct 19 2014' ,enddate: 'Wed Oct 5 2014' },
];

/*** @title Table with filtering
 */

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  foods = [
    {value: 'steak', viewValue: 'Steak'},
    {value: 'pizza', viewValue: 'Pizza'},
    {value: 'tacos', viewValue: 'Tacos'}
  ];
  displayedColumns = ['position', 'description','Assortment','Campaign', 'begindate','enddate'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    itemno = new FormControl('');
    itemdes=new FormControl();
    Assortment=new FormControl();
    Campaign=new FormControl();
    begin=new FormControl();
    end=new FormControl();    
  globalFilter = '';
    filteredValues = {
      itemno: '', itemdes: '', Assortment: '',Campaign: '',begin:'',  end: ''
    };

    @ViewChild(MatSort) sort: MatSort;
    applyFilter(filterValue:string) {   
      console.log('filer obj',filterValue)         
    this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    datefilter(filterValue) {   
      console.log('date filer obj',filterValue.toDateString())      
     
    this.dataSource.filter = filterValue.toDateString().trim();
    console.log(this.dataSource.filteredData[0]) 
  }
  constructor() {
    
   }

  ngOnInit() {    
    this.dataSource.sort = this.sort;
    this.itemno.valueChanges.subscribe((itemnovalue) => {
      this.filteredValues['itemno'] = itemnovalue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      console.log(this.dataSource.filter);
    });

    //this.dataSource.filterPredicate = this.customFilterPredicate();
  }
 
  // customFilterPredicate() {
  //   const myFilterPredicate = (data: PeriodicElement, filter: string): boolean => {
  //     var globalMatch = !this.globalFilter;

  //     if (this.globalFilter) {
  //       // search all text fields
  //       globalMatch = data.name.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1;
  //     }

  //     if (!globalMatch) {
  //       return;
  //     }

  //     let searchString = JSON.parse(filter);
  //     return data.position.toString().trim().indexOf(searchString.position) !== -1 &&
  //       data.name.toString().trim().toLowerCase().indexOf(searchString.name.toLowerCase()) !== -1;
  //   }
  //   return myFilterPredicate;
  // }
}


