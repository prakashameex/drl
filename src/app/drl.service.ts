import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {  map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})


export class DrlService {

  constructor(private http:Http) {  }
  getdata() {  
    return this.http.get('api/ELEMENT_DATA').pipe(map(Response=>Response.json()));
}
}
