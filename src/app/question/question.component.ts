import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../data-share.service';
@Component({
  selector: 'bc-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  id : any

  constructor(private data: DataShareService) { }

  ngOnInit() {
    this.data.currentId.subscribe(result => this.id = result)
  }
}
