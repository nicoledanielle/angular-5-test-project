import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { RecentSubmissionsComponent } from './recent-submissions/recent-submissions.component';
import { NewSubmissionComponent } from './new-submission/new-submission.component';
import { SharedModule } from '../shared/shared.module';
import { NgxMatDrpModule } from 'ngx-mat-daterange-picker';
import {
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule,
    SharedModule,
    NgxMatDrpModule
  ],
  declarations: [FormComponent, RecentSubmissionsComponent, NewSubmissionComponent]
})
export class FormModule { }
