import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostsDto } from '../../models';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit{

  displayedColumns: string[] = ['author', 'topic', 'qtyAnswers', 'tags'];
  questions: PostsDto = [];

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: PostsDto) {

  }

  ngOnInit() {
    this.questions = this.data;
  }

}
