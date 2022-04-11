import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { Page1Component } from './page1/page1.component';
import { FormsModule } from '@angular/forms';
import { Page2Component } from './page2/page2.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [Page1Component, Page2Component, TableComponent],
  imports: [CommonModule, FormRoutingModule, FormsModule],
})
export class FormModule {}
