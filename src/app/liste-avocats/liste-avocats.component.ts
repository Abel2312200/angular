import { Component, Input, OnInit } from '@angular/core';
import { InfoAvocatsComponent } from '../info-avocats/info-avocats.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IAvocat } from './Avocat';
import { ListeAvocatService } from './liste-avocats.service';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-liste-avocats',
  templateUrl: './liste-avocats.component.html',
  styleUrls: ['./liste-avocats.component.css']
})
export class ListeAvocatsComponent implements OnInit {
  public listeDesAvocats : IAvocat[]=[]
  public errorMsg: string | undefined ;
  constructor(private modalService: NgbModal, private AvocatService : ListeAvocatService,  private avocatS : SharedService) {
  }
  ngOnInit(): void {
    this.AvocatService.getAvocats().subscribe(
      {
        next : listeDesAvocats => this.listeDesAvocats = listeDesAvocats ,
        error : err => this.errorMsg=err
      }
    )
  }

  openInfo(a : IAvocat){
    this.avocatS.setAvocat(a);
    this.modalService.open(InfoAvocatsComponent);
  }

}
