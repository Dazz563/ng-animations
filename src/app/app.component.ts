import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { animateStateTrigger, fade, itemStateTrigger, markedTrigger } from './animations';

export class Course {
  title: string;
  status: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    markedTrigger,
    fade,
    animateStateTrigger,
    itemStateTrigger,
  ]
})
export class AppComponent implements OnInit {


  markedPrjIndex = 0;
  markedCards = 0;

  isShown = false;
  width = 400

  animate = false;

  cards = [1, 2, 3, 4];

  createNew = false;
  newCourseForm: FormGroup;

  courses: Course[] = [
    {
      title: 'Learn Angular Styles',
      status: 'inActive',
      description: 'Practice hard to understand how you may style components and update style dynamically.'
    },
    {
      title: 'Learn Angular Animations',
      status: 'Active',
      description: 'Learn how Angular helps with animating elements on your page.'
    },
    {
      title: 'Learn Angular Router',
      status: 'inActive',
      description: 'Practice hard to understand how you may style components and update style dynamically.'
    },
    {
      title: 'Learn Angular Observables',
      status: 'inActive',
      description: 'Practice hard to understand how you may style components and update style dynamically.'
    },
    {
      title: 'Learn Angular Security',
      status: 'Active',
      description: 'Learn how Angular helps with animating elements on your page.'
    },
    {
      title: 'Learn Angular Styles',
      status: 'inActive',
      description: 'Practice hard to understand how you may style components and update style dynamically.'
    },
  ];

  ngOnInit(): void {
    this.newCourseForm = new FormGroup({
      title: new FormControl(''),
      status: new FormControl(''),
      description: new FormControl(''),
    })
  }

  addCourse() {
    this.courses.unshift(this.newCourseForm.value as Course)
  }

  deleteCourse(index: number) {
    this.courses.splice(index, 1);
  }

  deleteCards(index: number) {
    this.cards.splice(index, 1);
  }
}
