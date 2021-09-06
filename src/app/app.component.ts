import { Component } from '@angular/core';
import { fade, markedTrigger } from './animations';

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
    fade
  ]
})
export class AppComponent {

  markedPrjIndex = 0;
  markedTest = false;

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

  deleteCourse(passedCourse: Course) {
    this.courses = this.courses.filter((course) => course !== passedCourse);
  }
}
