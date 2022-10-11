import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-regdoctor',
  templateUrl: './regdoctor.component.html',
  styleUrls: ['./regdoctor.component.css']
})
export class RegdoctorComponent implements OnInit {

  constructor(private service: AppService) { }
  doctorGroup = new UntypedFormGroup({
    dName: new UntypedFormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new UntypedFormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
  })

  addDoctor() {

    console.log(this.doctorGroup.value)
    // this.service.addDoctor(this.doctorGroup.value).subscribe(data=>{
    //   console.log(data);
    //   alert('Doctor added successfully');

    // })
  }
  ngOnInit() {
  }
}