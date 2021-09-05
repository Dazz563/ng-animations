import { Component } from '@angular/core';

export class Course {
  title: string;
  status: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // isFavorite = false;
  // showBoring = false;
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
      title: 'Learn Angular Styles',
      status: 'inActive',
      description: 'Practice hard to understand how you may style components and update style dynamically.'
    },
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
      title: 'Learn Angular Styles',
      status: 'inActive',
      description: 'Practice hard to understand how you may style components and update style dynamically.'
    },
  ];
}
