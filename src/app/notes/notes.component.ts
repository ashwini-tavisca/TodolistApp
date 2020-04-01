import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  notesList = [];
  saveNote = function(note: string) {
      if(note != "")
      {
        this.notesList.push(note);
      }
  }
  deletenote = function (index: number) {
    this.notesList.splice(index,1)
  }
}
