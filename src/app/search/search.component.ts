import { Component, OnInit, ViewChild, OnDestroy,Input } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, Sort, MatSelect } from '@angular/material';
import { FormControl } from '@angular/forms';
//import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DrlService, PeriodicElement } from '../drl.service';
import { take, takeUntil } from 'rxjs/operators';
import { Subject, ReplaySubject } from 'rxjs';
declare var $: any;
/*selectize concept */
const DEFAULT_DROPDOWN_CONFIG: any = {
  highlight: false,
  create: false,
  persist: true,
  plugins: ['dropdown_direction', 'remove_button'],
  dropdownDirection: 'down'
};


export const SINGLE_SELECT_PRESET_VALUE_CONFIG = Object.assign({}, DEFAULT_DROPDOWN_CONFIG, {
  labelField: 'assortmentDescription',
  valueField: 'assortmentId',
  searchField: ['assortmentDescription']
});
/*selectize concept */

/*** @title Table with filtering
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnDestroy {
  displayedColumns = ['itemNumber', 'itemDescription', 'assortment', 'campaign', 'campainBeginDate', 'campainEndDate'];
  @Input() campaignPlaceholder = 'Campaign';
  @Input() itemNumberPlaceholder = 'Item Number';
  @Input() assortmentPlaceholder = 'Assortment';
  originalPosts;
  posts;
  item_detail: Array<any> = [];
  item_description;
  dataSource;
  assortment;
  campaigndata;
  itemno = new FormControl();
  itemdesc = new FormControl();
  Assortment = new FormControl();
  Campaign = new FormControl();
  begin = new FormControl();
  end = new FormControl();
  public itemnoFilterCtrl: FormControl = new FormControl();
  public AssortmentCtrl: FormControl = new FormControl();
  public CampaignCtrl:FormControl=new FormControl();
  globalFilter = '';
  pageSizeOptions = 5;
  questioncard: PeriodicElement[] = new Array();
  questionscard = [];
  value;
  singleSelectConfig: any;
  singleSelectOptions: any;
  sortedData: any;
  isItemDescReadOnly :any=true;
  private _onDestroy = new Subject<void>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('singleSelect') singleSelect: MatSelect;
  public filteredBanks: ReplaySubject<any> = new ReplaySubject<any>(1);
  public assortfilter: ReplaySubject<any> = new ReplaySubject<any>(1);
  public camp_filter: ReplaySubject<any> = new ReplaySubject<any>(1);
  datefilter() {
    this.drl.getdata().subscribe(con => {
      this.dataSource = new MatTableDataSource(con);
    });
  }

  constructor(private drl: DrlService) {
    this.drl.getdata().subscribe(con => {
      this.originalPosts = con;
      this.questionscard = con.slice(0, 5);
      this.posts = this.originalPosts.slice(0, 5);
      this.sortedData = con.slice();
    });
    this.drl.getitemdetail().subscribe(con => {
      this.item_detail = con;
      this.filteredBanks.next(this.item_detail.slice());
    }, error => console.log("abhilash", error)// error path
    );
    this.drl.getassortment().subscribe(con => {
      this.assortment = con;
      this.assortfilter.next(this.assortment.slice());
    });
    this.drl.getcampaign().subscribe(con => {
      this.campaigndata = con;
      this.camp_filter.next(this.campaigndata.slice());
    });

  }

  ngOnInit() {

    //    $('#select-name').selectize({ options:[{
    //     description: 'Nice Guy',
    //     name: 'Brian Reavis',
    //     imageUrl: 'http://www.fashionspictures.com/wp-content/uploads/2013/11/short-hairstyles-for-a-square-face-42-150x150.jpg'
    // }, {
    //     description: 'Other nice guy',
    //     name: 'Nikola Tesla',
    //     imageUrl: 'http://www.fashionspictures.com/wp-content/uploads/2013/11/short-hairstyles-for-a-square-face-42-150x150.jpg'
    // }]});

    console.log('sample', this.item_detail);
    
    this.itemnoFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanks();
        console.log('test');
      });
      this.AssortmentCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.assortmentfilter();
        console.log('test');
      });
      this.CampaignCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.campaignfilter();
        console.log('test');
      });
     
    // form input field value change that changed values update to datasource filter variable
    this.itemno.valueChanges.subscribe((itemdescvalue) => {
      /* custom Filter */
      console.log("itemno change detection");
      console.log(this.originalPosts);
      for (let i = 0; i < this.originalPosts.length; i++) {
        if (this.originalPosts[i].itemNumber == itemdescvalue) {
          this.questioncard = this.originalPosts[i]; this.questionscard = [];
          this.questionscard.push(this.questioncard);
        }
      }
      /* custom Filter */
      // for (let i = 0; i < this.item_detail.length; i++) {
      //   if (this.item_detail[i].itemNumber == itemdescvalue) {
      //     this.item_description = this.item_detail[i].itemDescription;
      //     console.log('test', this.item_detail[i].itemDescription)
      //   }
      // }      
      this.isItemDescReadOnly=false;
      console.log("147",this.isItemDescReadOnly);
      /* custom Filter */
    });
    this.itemdesc.valueChanges.subscribe((itemdescvalue) => {
      /* custom Filter */
      for (let i = 0; i < this.originalPosts.length; i++) {
        if (this.originalPosts[i].itemDescription == itemdescvalue) {
          this.questioncard = this.originalPosts[i]; this.questionscard = [];
          this.questionscard.push(this.questioncard);
        }
      }
    });
    this.Assortment.valueChanges.subscribe((itemdescvalue) => {
      /* custom Filter */
      for (let i = 0; i < this.originalPosts.length; i++) {
        if (this.originalPosts[i].assortment == itemdescvalue) {
          this.questioncard = this.originalPosts[i]; this.questionscard = [];
          this.questionscard.push(this.questioncard);
        }
      }
      /* custom Filter */
    });
    this.Campaign.valueChanges.subscribe((itemdescvalue) => {
      /* custom Filter */
      for (let i = 0; i < this.originalPosts.length; i++) {
        if (this.originalPosts[i].campaign == itemdescvalue) {
          this.questioncard = this.originalPosts[i]; this.questionscard = [];
          this.questionscard.push(this.questioncard);
        }
      }
      /* custom Filter */
    });
    this.begin.valueChanges.subscribe((itemdescvalue) => {
      /* custom Filter */
      console.log('end', itemdescvalue.toDateString());
      for (let i = 0; i < this.originalPosts.length; i++) {
        if (this.originalPosts[i].campainBeginDate == itemdescvalue.toDateString()) {
          this.questioncard = this.originalPosts[i]; this.questionscard = [];
          this.questionscard.push(this.questioncard);
        }
      }
      /* custom Filter */
    });
    this.end.valueChanges.subscribe((itemdescvalue) => {
      /* custom Filter */
      console.log('end', itemdescvalue.toDateString());
      for (let i = 0; i < this.originalPosts.length; i++) {
        if (this.originalPosts[i].campainEndDate == itemdescvalue.toDateString()) {
          this.questioncard = this.originalPosts[i]; this.questionscard = [];
          this.questionscard.push(this.questioncard);
        }
      }
      /* custom Filter */
    });
  }


  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  onScroll() {
    console.log('scroll');
    if (this.questionscard.length < this.originalPosts.length) {
      let len = this.questionscard.length;
      console.log(this.questionscard.length);
      for (let i = len; i < len + 5; i++) {
        if (i == this.originalPosts.length)
          break;
        this.questionscard.push(this.originalPosts[i]);
      }

      this.dataSource = new MatTableDataSource(this.posts);
      console.log(this.posts);
    }
  }
  sortData(sort: Sort) {
    // const data =this.originalPosts.slice();
    console.log('sort', sort)
    console.log('data', this.questionscard);
    console.log('sorted data', this.sortedData);
    if (!sort.active || sort.direction === '') {
      this.sortedData = this.questionscard;
      return;
    }
    console.log('sort data', this.questionscard.sort());
    this.sortedData = this.questionscard.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'itemNumber': return this.compare(a.itemNumber, b.itemNumber, isAsc);
        case 'itemDescription': return this.compare(a.itemDescription, b.itemDescription, isAsc);
        case 'assortment': return this.compare(a.assortment, b.assortment, isAsc);
        case 'campaign': return this.compare(a.campaign, b.campaign, isAsc);
        case 'campainBeginDate': return this.compare(a.campainBeginDate, b.campainBeginDate, isAsc);
        case 'campainEndDate': return this.compare(a.campainEndDate, b.campainEndDate, isAsc);
        default: return 0;
      }
    });
    console.log('te', this.questionscard.sort());

  }


  compare(a: number | string, b: number | string, isAsc: boolean) {

    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  private filterBanks() {
    if (!this.item_detail) {
      return;
    }
    // get the search keyword
    let search = this.itemnoFilterCtrl.value;
    if (!search) {
      this.filteredBanks.next(this.item_detail.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    console.log(search);
    // filter the banks
    let temp = this.item_detail.filter(item =>
      item.itemNumber.toLowerCase().indexOf(search.toLowerCase()) > -1);
    this.filteredBanks.next(temp);
  }
  
  private assortmentfilter() {
    if (!this.assortment) {
      return;
    }
    // get the search keyword
    let search = this.AssortmentCtrl.value;
    if (!search) {
      this.assortfilter.next(this.assortment.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    console.log(search);
    // filter the banks
    let temp = this.assortment.filter(item =>
      item.description.toLowerCase().indexOf(search.toLowerCase()) > -1);
    this.assortfilter.next(temp);
  }
  private campaignfilter() {
    if (!this.campaigndata) {
      return;
    }
    // get the search keyword
    let search = this.CampaignCtrl.value;
    if (!search) {
      this.camp_filter.next(this.campaigndata.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    console.log(search);
    // filter the banks
    let temp = this.campaigndata.filter(item =>
      item.description.toLowerCase().indexOf(search.toLowerCase()) > -1);
    this.camp_filter.next(temp);
  }
  
}