import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
tabnotes=[10,15,20,16,14] ; 
Onpremier() { console.log(this.tabnotes[0]) ; }
Ondernier() { console.log(this.tabnotes[4]) ; }
  constructor() { }

  ngOnInit() {
  }

}
