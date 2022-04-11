import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

import { mainModel } from '../mainModel';
import { page1Model } from './page1Model';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component implements OnInit {
  constructor(private _common: CommonService, private _router: Router) {}

  //...........................datamodel.............................//
  data1: page1Model = new page1Model();
  //................................................................//

  //...button....//
  btn: string = 'Submit';
  //............//

  //....list....//
  update_list_1: mainModel[] = [];
  update_i: any;
  //............//

  //...................page1-insert-function........................//

  insertData1(f: any) {
    this._common.storeData1(this.data1);

    this._router.navigate(['/form/page2']);
  }
  //.................................................................//

  //....................page-1-update-function.......................//
  updatePage1() {
    for (var i = 0; i < this.update_list_1.length; i++) {
      if (JSON.parse(localStorage.getItem('index') || '') == this.update_i) {
        this.data1 = this.update_list_1[i];
        this.btn = 'Update';
      }
    }
  }
  //.................................................................//

  ngOnInit(): void {
    this.update_list_1 = this._common.updateList;
    this.update_i = this._common.updateIndex;
    if (this.update_list_1.length != 0) {
      this.updatePage1();
    }
  }
}
