import { EventEmitter } from '@angular/core';
import { TabsComponent } from './../tabs/tabs.component';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Tab } from "./tab.interface";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit, Tab {

  @Output() onClick:EventEmitter<void> = new EventEmitter<void>();
  @Input() title:string;
  public isActive:boolean = false;

  constructor() { }

  ngOnInit() {
    
  }
  clickTabContent(){
    this.onClick.emit();
  }

}
