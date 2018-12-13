import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @ViewChild('myDatepicker') datePicker: MatDatepicker<Date>;

  constructor() { }

  ngOnInit() {
    // this.datePicker.open();
  }

}
