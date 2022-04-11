import { Injectable } from '@angular/core';
import { mainModel } from './form/mainModel';
import { page1Model } from './form/page1/page1Model';
import { page2Model } from './form/page2/page2Model';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  //.....List.....//

  page1List: page1Model[] = [];
  page2List: page2Model[] = [];
  formalList: any;
  mainList: mainModel[] = [];

  updateList: mainModel[] = [];
  updateIndex: number = -1;

  deleteList: mainModel[] = [];
  //..............//

  //........................page1-date-insert..........................//
  storeData1(data1: page1Model) {
    console.log('service data 1==>', data1);
    localStorage.setItem('page1', JSON.stringify(data1));
  }
  //...................................................................//

  //........................page2-date-insert..........................//
  storeData2(data2: page2Model) {
    console.log('service data 2==>', data2);
    localStorage.setItem('page2', JSON.stringify(data2));

    this.page1List = JSON.parse(localStorage.getItem('page1') || '');
    console.log('page1list==>', this.page1List);

    this.page2List = JSON.parse(localStorage.getItem('page2') || '');
    console.log('page2list==>', this.page2List);

    this.formalList = { ...this.page1List, ...this.page2List };
    console.log('formal list ===>', this.formalList);

    if (this.updateIndex != -1) {
      this.mainList = JSON.parse(localStorage.getItem('mainlist') || '[]');

      this.mainList[this.updateIndex] = this.formalList;
      console.log('main list==>', this.mainList);
      localStorage.setItem('mainlist', JSON.stringify(this.mainList));
    } else {
      this.mainList = JSON.parse(localStorage.getItem('mainlist') || '[]');

      this.mainList.push(this.formalList);
      console.log('main list==>', this.mainList);
      localStorage.setItem('mainlist', JSON.stringify(this.mainList));
    }
  }
  //...................................................................//

  //........................Update-Data-Function.......................//

  updateData(data_u: mainModel, index: number) {
    this.updateList.push(data_u);
    localStorage.setItem('index', JSON.stringify(index));
    this.updateIndex = JSON.parse(localStorage.getItem('index') || '');
    console.log('update list & index ==>', this.updateList, this.updateIndex);
  }
  //...................................................................//

  //.........................Delete-Data.................................//
  deleteData(index: number) {
    this.deleteList = JSON.parse(localStorage.getItem('mainlist') || '[]');

    this.deleteList.splice(index, 1);

    localStorage.setItem('mainlist', JSON.stringify(this.deleteList));
    window.location.reload();
  }

  //.....................................................................//
  //==============================END-OF-CODE================================//
}
