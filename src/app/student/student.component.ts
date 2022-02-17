import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Student } from '../models/student';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  fName = new FormControl("");
  lName = new FormControl("");
  level = new FormControl("");

  isSubmit = false ;
  constructor() { }

  ngOnInit(): void {
  }
  
  get displayDataAsJson(){
    return JSON.stringify(new Student(this.fName.value , this.lName.value, this.level.value));
  }
  
  onSubmit():void{
    console.log(this.displayDataAsJson)
    this.fName.reset("") ;
    this.lName.reset("") ;
    this.level.reset("") ;
  }


  
}
