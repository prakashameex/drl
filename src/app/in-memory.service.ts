import { InMemoryDbService } from 'angular-in-memory-web-api';

export interface PeriodicElement {
  itemdes: string;
  Assortment:string;
  position: string;
  Campaign: string;
  begindate:string;  
  enddate: string;
}

export class InMemoryService implements InMemoryDbService {

  constructor() { }
  createDb() {
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
    return {ELEMENT_DATA};
  }
}
