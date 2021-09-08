import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { itemStateTrigger, markedTrigger, slideStateTrigger } from '../animations';
import { Course } from '../shared/course-db.service';


@Component({
  selector: 'app-mat-card',
  templateUrl: './mat-card.component.html',
  styleUrls: ['./mat-card.component.scss'],
  animations: [
    markedTrigger,
    itemStateTrigger,
  ]
})
export class MatCardComponent implements OnInit {

  @Input() course: Course;
  @Output() deletedCourse = new EventEmitter<Course>();
  courseStatus: string;
  markedTest = false;


  options = ['Active', 'InActive',]

  constructor() { }

  ngOnInit(): void {
  }

  getPrjStatusClass() {
    return {
      'active': this.course.status === 'Active',
      'inactive': this.course.status === 'inActive',
    }
  }

  deleteCourse(course: Course) {
    this.deletedCourse.emit(course);
  }


}
