import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
@Input () nom :string ; 
@Input () reference :string ; 
@Input () image:string ; 
@Input () prix:number ; 
@Input () repare:string ; 
Onchanger () { this.repare="réparé"}
  constructor() { }

  ngOnInit() {
  }

}
