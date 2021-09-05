import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../app.component';

@Component({
  selector: 'app-mat-card',
  templateUrl: './mat-card.component.html',
  styleUrls: ['./mat-card.component.scss']
})
export class MatCardComponent implements OnInit {

  @Input() course: Course;
  courseStatus: string;
  divClicked = false;

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


}
