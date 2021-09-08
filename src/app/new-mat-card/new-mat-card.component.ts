import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Course } from '../app.component';

@Component({
  selector: 'app-new-mat-card',
  templateUrl: './new-mat-card.component.html',
  styleUrls: ['./new-mat-card.component.scss']
})
export class NewMatCardComponent implements OnInit {

  constructor() { }

  newCourseForm: FormGroup;
  @Output() courseCreated = new EventEmitter<Course>();

  ngOnInit(): void {
    this.newCourseForm = new FormGroup({
      title: new FormControl(''),
      status: new FormControl(''),
      description: new FormControl(''),
    });
  }

  addCourse() {
    this.courseCreated.emit(this.newCourseForm.value as Course);
  }

}
