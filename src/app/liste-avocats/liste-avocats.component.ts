import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { InfoAvocatsComponent } from '../info-avocats/info-avocats.component';

@Component({
  selector: 'app-liste-avocats',
  templateUrl: './liste-avocats.component.html',
  styleUrls: ['./liste-avocats.component.css']
})
export class ListeAvocatsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openInfo(){
    this.dialog.open(InfoAvocatsComponent);
  }
  listeDesAvocats : any[]=[
    {
      nom: 'DeLa Roche',
      prenoms:'Bert',
      prixHeure : 200,
      procesGagne : 21,
      nombreEtoile : 4,
      anneeExp : 12,
      photo :'assets/images/olegdudko190803008.jpg'
    },
    {
      nom: 'DeLa Roche',
      prenoms:'Bert',
      prixHeure : 200,
      procesGagne : 21,
      nombreEtoile : 4,
      anneeExp : 12,
      photo :'assets/images/olegdudko190803008.jpg'
    }
    ,
    {
      nom: 'DeLa Roche',
      prenoms:'Bert',
      prixHeure : 200,
      procesGagne : 21,
      nombreEtoile : 4,
      anneeExp : 12,
      photo :'assets/images/olegdudko190803008.jpg'
    }
    ,
    {
      nom: 'DeLa Roche',
      prenoms:'Bert',
      prixHeure : 200,
      procesGagne : 21,
      nombreEtoile : 4,
      anneeExp : 12,
      photo :'assets/images/olegdudko190803008.jpg'
    }
    ,
    {
      nom: 'DeLa Roche',
      prenoms:'Bert',
      prixHeure : 200,
      procesGagne : 21,
      nombreEtoile : 4,
      anneeExp : 12,
      photo :'assets/images/olegdudko190803008.jpg'
    }
    ,
    {
      nom: 'DeLa Roche',
      prenoms:'Bert',
      prixHeure : 200,
      procesGagne : 21,
      nombreEtoile : 4,
      anneeExp : 12,
      photo :'assets/images/olegdudko190803008.jpg'
    },
    {
      nom: 'DeLa Roche',
      prenoms:'Bert',
      prixHeure : 200,
      procesGagne : 21,
      nombreEtoile : 4,
      anneeExp : 12,
      photo :'assets/images/olegdudko190803008.jpg'
    }
  ];

}
