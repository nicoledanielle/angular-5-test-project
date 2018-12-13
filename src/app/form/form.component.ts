import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @ViewChild('picker') datePicker: MatDatepicker<Date>;
  console: any;

  constructor() { }

  ngOnInit() {
    this.console = console;
    // this.datePicker.open();
  }

  toggleDatepicker() {
    if(this.datePicker.opened) {
      this.datePicker.close();
    }
    else {
      this.datePicker.open();
    }
    
  }

}
