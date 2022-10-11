import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {


  constructor() { }
  today = new Date();
  name = "janvi";
  lastname = "shah";
  title = "hi this is angular 14";
  bal: number = 1000;
  marks = 50;
  a = 50;
  amount: number = 1000;
  ngOnInit(): void {
  }

}