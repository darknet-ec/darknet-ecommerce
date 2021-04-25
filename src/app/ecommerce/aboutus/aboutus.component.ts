import { Component, OnInit } from '@angular/core';
import { DropdownSettings } from 'angular2-multiselect-dropdown/lib/multiselect.interface';
import * as Rellax from 'rellax';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  dropdownList: any[] = [];
  selectedItems: any[] = [];
  dropdownSettings: DropdownSettings = {
    singleSelection: true,
    text: "Speciality",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: "",
    lazyLoading: true,
    maxHeight: 100,
    enableCheckAll: false,
    filterSelectAllText: '',
    filterUnSelectAllText: '',
    enableFilterSelectAll: true,
    searchBy: [],
    badgeShowLimit: 0,
    searchPlaceholderText: '',
    noDataLabel: '',
    primaryKey: '',
    position: ''
  };

  dropdownList1 = [];
  selectedItems1 = [];

  focus: any;
  focus1: any;
  data: Date = new Date();

  constructor() { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');
    // var rellaxText = new Rellax('.rellax-text');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('about-us');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    this.dropdownList = [
      { "id": 1, "itemName": "I'm a Designer" },
      { "id": 2, "itemName": "I'm a Developer" },
      { "id": 3, "itemName": "I'm a Hero" }
    ];
    this.selectedItems = [
      { "id": 2, "itemName": "I'm a Developer" }
    ];
    this.dropdownSettings = {
      singleSelection: true,
      text: "Speciality",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "",
      lazyLoading: true,
      maxHeight: 100,
      enableCheckAll: false,
      filterSelectAllText: '',
      filterUnSelectAllText: '',
      enableFilterSelectAll: true,
      searchBy: [],
      badgeShowLimit: 0,
      searchPlaceholderText: '',
      noDataLabel: '',
      primaryKey: '',
      position: ''

    };
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('about-us');
    var navbar = document.getElementsByTagName('nav')[0];
    body.classList.remove('navbar-transparent');
  }


}
