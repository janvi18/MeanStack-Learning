import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  data(name: any) {

    alert(name);
  }

  student: any = {
    name: "ABC",
    age: 25,
    marks: 70,

  }
  students: any = [
    {
      name: "ABC",
      age: 25,
      marks: 70,
    },
    {
      name: "DEF",
      age: 15,
      marks: 60,
    },
    {
      name: "XYZ",
      age: 20,
      marks: 89,
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}