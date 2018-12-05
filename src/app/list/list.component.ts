import { Component, OnInit } from '@angular/core';
import { NodeService } from './../node.service';
import { DataShareService } from '../data-share.service';
@Component({
  selector: 'bc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  Question: String[] = []
  QuestionId: any[] = [] 
  QuestionDetails: any
  constructor(private service: NodeService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.getAllPolls().subscribe((result: any)=>{
      result.data.forEach(element => {
        this.Question.push(element['poll']);
        this.QuestionId.push(element['id']);
      });
    })
  }

  OnClick(value:any){
    this.Question.forEach(element => {
      if(element == value){
        value = this.QuestionId[this.Question.indexOf(element)]
      }
    });
    this.service.getQuestionDetails(value).subscribe((result: any)=>{
      this.QuestionDetails = result.data
    })
  }
}
