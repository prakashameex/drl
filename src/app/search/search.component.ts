import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource,MatSort} from '@angular/material';
import { FormControl } from '@angular/forms';
export interface PeriodicElement {
  itemdes: string;
  Assortment:string;
  position: string;
  Campaign: string;
  begindate:string;  
  enddate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '#123', itemdes: 'Tacos',Assortment: 'sample1',Campaign: 'test2', begindate: 'Wed Oct 12 2014' ,enddate: 'Thu Nov 15 2018' },
  {position: '#124', itemdes: 'Steak',Assortment: 'sample2',Campaign: 'test3', begindate: 'Thu Nov 15 2018' ,enddate: 'Wed Oct 16 2014' },
  {position: '#125', itemdes: 'Pizza',Assortment: 'sample3',Campaign: 'test4', begindate: 'Wed Oct 14 2014' ,enddate: 'Wed Oct 17 2014' },
  {position: '#123', itemdes: 'Pizza',Assortment: 'sample4',Campaign: 'test1', begindate: 'Wed Oct 15 2014' ,enddate: 'Wed Oct 18 2014' },
  {position: '#125', itemdes: 'Pizza',Assortment: 'sample4', Campaign: 'test2', begindate: 'Wed Oct 16 2014' ,enddate: 'Wed Oct 19 2014' },
  {position: '#124', itemdes: 'Carbon',Assortment: 'sample2', Campaign: 'test3', begindate: 'Wed Oct 17 2014' ,enddate: 'Wed Oct 20 2014' },
  {position: '#123', itemdes: 'Nitrogen',Assortment: 'sample3', Campaign: 'test4', begindate: 'Wed Oct 13 2014' ,enddate: 'Wed Oct 21 2014' },
  {position: '#121', itemdes: 'Pizza',Assortment: 'sample4', Campaign: 'test1', begindate: 'Wed Oct 18 2014' ,enddate: 'Wed Oct 22 2014' },
  {position: '#122', itemdes: 'Fluorine',Assortment: 'sample3', Campaign: 'test2', begindate: 'Wed Oct 13 2014' ,enddate: 'Wed Oct 23 2014' },
  {position: '#123', itemdes: 'Pizza',Assortment: 'sample2', Campaign: 'test3', begindate: 'Wed Oct 19 2014' ,enddate: 'Wed Oct 5 2014' },
];

/*** @title Table with filtering
 */

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  itemnumber = [
    {value: '#123', viewValue: '#123'},
    {value: '#124', viewValue: '#124'},
    {value: '#125', viewValue: '#125'}
  ];
  foods = [
    {value: 'steak', viewValue: 'Steak'},
    {value: 'pizza', viewValue: 'Pizza'},
    {value: 'tacos', viewValue: 'Tacos'}
  ];
  assortment = [
    {value: 'sample1', viewValue: 'sample1'},
    {value: 'sample2', viewValue: 'sample2'},
    {value: 'sample3', viewValue: 'sample3'},
    {value: 'sample4', viewValue: 'sample4'}
  ];
  campaign = [
    {value: 'test1', viewValue: 'test1'},
    {value: 'test2', viewValue: 'test2'},
    {value: 'test3', viewValue: 'test3'},
    {value: 'test4', viewValue: 'test4'}
  ];
  displayedColumns = ['position', 'itemdes','Assortment','Campaign', 'begindate','enddate'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    itemno = new FormControl();
    itemdesc=new FormControl();
    Assortment=new FormControl();
    Campaign=new FormControl();
    begin=new FormControl();
    end=new FormControl();    
  globalFilter = '';
    filteredValues = {
      itemno: '', itemdes: '', Assortment: '',Campaign: '',begin:'',  end: ''
    };

    @ViewChild(MatSort) sort: MatSort;
  //   applyFilter(filterValue:string) {   
  //     console.log('filer obj',filterValue)         
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   }
  //   datefilter(filterValue) {   
  //     console.log('date filer obj',filterValue.toDateString())      
     
  //   this.dataSource.filter = filterValue.toDateString().trim();
  //   console.log(this.dataSource.filteredData[0]) 
  // }
  constructor() {
    
   }

  ngOnInit() {    
    this.dataSource.sort = this.sort;
    this.itemno.valueChanges.subscribe((itemdescvalue) => {
      this.filteredValues['itemno'] = itemdescvalue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      console.log(this.dataSource.filter);
    });
    this.itemdesc.valueChanges.subscribe((itemdescvalue) => {
      this.filteredValues['itemdes'] = itemdescvalue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      console.log(this.dataSource.filter);
    });
        this.Assortment.valueChanges.subscribe((itemdescvalue) => {
      this.filteredValues['Assortment'] = itemdescvalue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      console.log(this.dataSource.filter);
    });
    this.Campaign.valueChanges.subscribe((itemdescvalue) => {
      this.filteredValues['Campaign'] = itemdescvalue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      console.log(this.dataSource.filter);
    });
    this.begin.valueChanges.subscribe((itemdescvalue) => {     
      this.filteredValues['begin'] = itemdescvalue.toDateString();
      console.log(this.filteredValues['begin']);
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      console.log(this.dataSource.filter);
    });
    this.end.valueChanges.subscribe((itemdescvalue) => {     
      this.filteredValues['end'] = itemdescvalue.toDateString();
      console.log(this.filteredValues['end']);
      this.dataSource.filter = JSON.stringify(this.filteredValues);
      console.log(this.dataSource.filter);
    });
 this.dataSource.filterPredicate = this.customFilterPredicate();
  }
 
  customFilterPredicate() {
    const myFilterPredicate = (data: PeriodicElement, filter: string): boolean => {
      console.log(data);
      
      var globalMatch = !this.globalFilter;

      if (this.globalFilter) {
        // search all text fields
        globalMatch = data.itemdes.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1;
      }

      if (!globalMatch) {
        return;
      }

      let searchString = JSON.parse(filter);
      return  data.Assortment.toString().trim().toLowerCase().indexOf(searchString.Assortment.toLowerCase()) !== -1 && data.itemdes.toString().trim().toLowerCase().indexOf(searchString.itemdes.toLowerCase()) !== -1 && data.Campaign.toString().trim().toLowerCase().indexOf(searchString.Campaign.toLowerCase()) !== -1 && data.begindate.toString().trim().toLowerCase().indexOf(searchString.begin.toLowerCase()) !== -1 && data.position.toString().trim().toLowerCase().indexOf(searchString.itemno.toLowerCase()) !== -1 && data.enddate.toString().trim().toLowerCase().indexOf(searchString.end.toLowerCase()) !== -1;
    }
    return myFilterPredicate;
  }
}


