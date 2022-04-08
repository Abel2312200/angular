import { Component, Inject, Injectable, Input, OnInit } from '@angular/core';
import { IAvocat } from '../liste-avocats/Avocat';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-info-avocats',
  templateUrl: './info-avocats.component.html',
  styleUrls: ['./info-avocats.component.css']
})
export class InfoAvocatsComponent implements OnInit {

  public avocat : IAvocat|undefined;
  constructor(public avocatS:SharedService) {
  }

  ngOnInit(): void {
    this.avocat=this.avocatS.getAvocat();
  }

}
