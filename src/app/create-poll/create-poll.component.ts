import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bc-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {

  constructor() { }

  count: any
  num: number = 0

  ngOnInit() {

  }

  addOption(){
    this.num += 1
    this.count = Array(this.num).fill(0).map((x,i)=>i);
  }

}
