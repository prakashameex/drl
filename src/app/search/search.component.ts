import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { FormControl } from '@angular/forms';
//import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DrlService } from '../drl.service'
import { PeriodicElement } from '../in-memory.service'

/*** @title Table with filtering
 */

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  displayedColumns = ['position', 'itemdes', 'Assortment', 'Campaign', 'begindate', 'enddate'];
  originalPosts;
  posts;
  itemnumber=[];
  description=[];
  dataSource;
  itemno = new FormControl();
  itemdesc = new FormControl();
  Assortment = new FormControl();
  Campaign = new FormControl();
  begin = new FormControl();
  end = new FormControl();
  globalFilter = '';
  //created empty object
  filteredValues = {
    itemno: '', itemdes: '', Assortment: '', Campaign: '', begin: '', end: ''
  };

  @ViewChild(MatSort) sort: MatSort;
  datefilter() {
    this.drl.getdata().subscribe(con => {
      this.dataSource = new MatTableDataSource(con);
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = this.customFilterPredicate();
    });
  }
  constructor(private drl: DrlService) {
    this.drl.getdata().subscribe(con => {
      var obj = {};
      var obj1={};
      for (var i = 0, len = con.length; i < len; i++){
        obj[con[i]['position']] = con[i];        
      }
     this.itemnumber = new Array();
      for (var key in obj)
        this.itemnumber.push(obj[key]);
      console.log(this.itemnumber)
      for (var i = 0, len = con.length; i < len; i++){
        obj1[con[i]['description']] = con[i];        
      }
      for (var key in obj1)
        this.description.push(obj1[key]);
        console.log( this.description);       
      this.originalPosts = con;
      this.posts = this.originalPosts.slice(0, 20);
      this.dataSource = new MatTableDataSource(this.posts);
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = this.customFilterPredicate();
      // for(let key in this.dataSource.filteredData){
      //   console.log(this.dataSource.filteredData[key].position);    

      // }
      // console.log(this.removeDuplicateUsingFilter(this.dataSource.filteredData.position));
    });
  }
  //        removeDuplicateUsingFilter(arr){
  //   let unique_array =  arr.filter(function(elem, index, self) {
  //     index == self.indexOf(elem.position);

  //    return index;
  // });
  // return unique_array;
  // }
  ngOnInit() {
    // form input field value change
    this.itemno.valueChanges.subscribe((itemdescvalue) => {
      console.log(itemdescvalue)
      //once form input field values changed that value assiged fieldered value empty array this value will add every indivual element 
      this.filteredValues['itemno'] = itemdescvalue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.itemdesc.valueChanges.subscribe((itemdescvalue) => {
      this.filteredValues['itemdes'] = itemdescvalue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.Assortment.valueChanges.subscribe((itemdescvalue) => {
      this.filteredValues['Assortment'] = itemdescvalue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.Campaign.valueChanges.subscribe((itemdescvalue) => {
      this.filteredValues['Campaign'] = itemdescvalue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.begin.valueChanges.subscribe((itemdescvalue) => {
      this.filteredValues['begin'] = itemdescvalue.toDateString();
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.end.valueChanges.subscribe((itemdescvalue) => {
      this.filteredValues['end'] = itemdescvalue.toDateString();
      //asign material current filter variable our current selected value
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
  }

  customFilterPredicate() {
    const myFilterPredicate = (data: PeriodicElement, filter: string): boolean => {

      // mat filter element chk with data array element
      let searchString = JSON.parse(filter);
      return data.Assortment.toString().trim().toLowerCase().indexOf(searchString.Assortment.toLowerCase()) !== -1 && data.itemdes.toString().trim().toLowerCase().indexOf(searchString.itemdes.toLowerCase()) !== -1 && data.Campaign.toString().trim().toLowerCase().indexOf(searchString.Campaign.toLowerCase()) !== -1 && data.begindate.toString().trim().toLowerCase().indexOf(searchString.begin.toLowerCase()) !== -1 && data.position.toString().trim().toLowerCase().indexOf(searchString.itemno.toLowerCase()) !== -1 && data.enddate.toString().trim().toLowerCase().indexOf(searchString.end.toLowerCase()) !== -1;
    }
    return myFilterPredicate;
  }
  onScroll() {
    console.log('scroll');
    if (this.posts.length < this.originalPosts.length) {
      let len = this.posts.length;
      console.log(this.posts.length);
      for (let i = len; i < len + 20; i++) {
        if (i == this.originalPosts.length)
          break;
        this.posts.push(this.originalPosts[i]);
      }

      this.dataSource = new MatTableDataSource(this.posts);
      console.log(this.posts);
    }
  }
}


