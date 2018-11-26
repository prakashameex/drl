import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {  map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export interface PeriodicElement {
  itemDescription: string;
  assortment:string;
  itemNumber: string;
  campaign: string;
  campainBeginDate:string;  
  campainEndDate: string;
}
@Injectable({
  providedIn: 'root'
})


export class DrlService {

  constructor(private http:Http) {  }
  getdata() {  
    return this.http.get('http://drl-fpa.ameexcloud.com/api/search/getalldata').pipe(map(Response=>Response.json()));
}
getitemdetail() {  
  return this.http.get('http://drl-fpa.ameexcloud.com/api/item/getallitemsdetails').pipe(map(Response=>Response.json()));
}
getassortment(){  
  return this.http.get('http://drl-fpa.ameexcloud.com/api/assortment/getallassortmentsdetails').pipe(map(Response=>Response.json()));
}
getcampaign(){  
  return this.http.get('http://drl-fpa.ameexcloud.com/api/campaign/getallcampaigndetails').pipe(map(Response=>Response.json()));
}
}
