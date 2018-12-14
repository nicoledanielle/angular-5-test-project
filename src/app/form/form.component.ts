import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { NgxDrpOptions, PresetItem, Range } from 'ngx-mat-daterange-picker';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @ViewChild('picker') datePicker: MatDatepicker<Date>;
  console: any;

  @ViewChild('dateRangePicker') dateRangePicker;
  range:Range = {fromDate:new Date(), toDate: new Date()};
  options:NgxDrpOptions;
  presets:Array<PresetItem> = [];

  constructor() { }

  ngOnInit() {
    this.console = console;

    const today = new Date();
    const resetRange = {fromDate: today, toDate: today};
    this.dateRangePicker.resetDates(resetRange); // will trigger selectedDateRangeChanged
 
    const fromMin = new Date(today.getFullYear(), today.getMonth()-2, 1);
    const fromMax = new Date(today.getFullYear(), today.getMonth()+1, 0);
    const toMin = new Date(today.getFullYear(), today.getMonth()-1, 1);
    const toMax = new Date(today.getFullYear(), today.getMonth()+2, 0);
 
    this.setupPresets();
    this.options = {
      presets: this.presets,
      format: 'mediumDate',
      range: {fromDate:today, toDate: today},
      applyLabel: "Submit",
      // calendarOverlayConfig: {
      //   shouldCloseOnBackdropClick: false,
      //   hasBackDrop: false
      // }
      // cancelLabel: "Cancel",
      // excludeWeekends:true,
      // fromMinMax: {fromDate:fromMin, toDate:fromMax},
      // toMinMax: {fromDate:toMin, toDate:toMax}
    };

  }

  updateRange(range: Range){
    this.range = range;
  }  
  
  // helper function to create initial presets
  setupPresets() {
 
    const backDate = (numOfDays) => {
      const today = new Date();
      return new Date(today.setDate(today.getDate() - numOfDays));
    }
    
    const today = new Date();
    const yesterday = backDate(1);
    const minus7 = backDate(7)
    const minus30 = backDate(30);
    const currMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    const currMonthEnd = new Date(today.getFullYear(), today.getMonth()+1, 0);
    const lastMonthStart = new Date(today.getFullYear(), today.getMonth()-1, 1);
    const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);
    
    this.presets =  [
      {presetLabel: "Yesterday", range:{ fromDate:yesterday, toDate:today }},
      {presetLabel: "Last 7 Days", range:{ fromDate: minus7, toDate:today }},
      {presetLabel: "Last 30 Days", range:{ fromDate: minus30, toDate:today }},
      {presetLabel: "This Month", range:{ fromDate: currMonthStart, toDate:currMonthEnd }},
      {presetLabel: "Last Month", range:{ fromDate: lastMonthStart, toDate:lastMonthEnd }}
    ]
  }

  // toggleDatepicker() {
  //   if(this.datePicker.opened) {
  //     this.datePicker.close();
  //   }
  //   else {
  //     this.datePicker.open();
  //   }
    
  // }

}
