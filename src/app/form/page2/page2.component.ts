import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { mainModel } from '../mainModel';
import { page2Model } from './page2Model';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
})
export class Page2Component implements OnInit {
  constructor(private _common: CommonService) {}

  //...button...//
  btn: string = 'Submit';
  //............//

  //...List....//
  update_list_2: mainModel[] = [];
  update_i: any;

  //...........//

  //...........................datamodel.............................//
  data2: page2Model = new page2Model();
  //.................................................................//

  //...................page2-insert-function........................//

  insertData2(g: any) {
    this._common.storeData2(this.data2);
  }
  //.................................................................//

  //....................page-2-update-function.......................//
  updatePage2() {
    for (var i = 0; i < this.update_list_2.length; i++) {
      if (JSON.parse(localStorage.getItem('index') || '') == this.update_i) {
        this.data2 = this.update_list_2[i];
        this.btn = 'Update';
      }
    }
  }
  //.................................................................//

  ngOnInit(): void {
    this.update_list_2 = this._common.updateList;
    this.update_i = this._common.updateIndex;

    if (this.update_list_2.length != 0) {
      this.updatePage2();
    }
  }
}
