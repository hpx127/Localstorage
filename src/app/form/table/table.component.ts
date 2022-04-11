import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { mainModel } from '../mainModel';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(private _common: CommonService, private _router: Router) {}

  //...List...//
  tableList: mainModel[] = [];
  //..........//

  //.............................Update-data..............................//
  updateOne(list: mainModel, index: number) {
    this._common.updateData(list, index);
    this._router.navigate(['/form/page1']);
  }

  //......................................................................//

  //.......................Delete-data..................................//
  deleteOne(index: number) {
    this._common.deleteData(index);
  }
  //.....................................................................//
  ngOnInit(): void {
    this.tableList = JSON.parse(localStorage.getItem('mainlist') || '[]');
    console.log('table list data==>', this.tableList);
  }

  //================================END-OF-CODE=============================//
}
