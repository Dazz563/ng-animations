import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Course } from '../shared/course-db.service';

@Component({
  selector: 'app-new-mat-card',
  templateUrl: './new-mat-card.component.html',
  styleUrls: ['./new-mat-card.component.scss'],
  animations: [

  ]
})
export class NewMatCardComponent implements OnInit {

  constructor() { }

  newCourseForm: FormGroup;
  @Output() creationCancelled = new EventEmitter<void>();
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
    this.newCourseForm.reset();
  }

  onCancel() {
    this.newCourseForm.reset();
    this.creationCancelled.emit();
  }

}
