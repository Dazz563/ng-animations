import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

export class Course {
  title: string;
  status: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class CourseDbService {

  courses: Course[] = [
    {
      title: 'Learn Angular Styles',
      status: 'inActive',
      description: 'Learn how Angular helps with animating elements on your page.'
    },
    {
      title: 'Learn Angular Animations',
      status: 'Active',
      description: 'Learn how Angular helps with animating elements on your page.'
    },
    {
      title: 'Learn Angular Router',
      status: 'inActive',
      description: 'Learn how Angular helps with animating elements on your page.'
    },
    {
      title: 'Learn Angular Observables',
      status: 'inActive',
      description: 'Learn how Angular helps with animating elements on your page.'
    },
    {
      title: 'Learn Angular Security',
      status: 'Active',
      description: 'Learn how Angular helps with animating elements on your page.'
    },
    {
      title: 'Learn Angular Styles',
      status: 'inActive',
      description: 'Learn how Angular helps with animating elements on your page.'
    },
  ];

  constructor() { }

  loadCourses(): Observable<Course[]> {
    const courseLoader = Observable.create((observer: Observer<Course[]>) => {
      setTimeout(() => {
        observer.next(this.courses);
      }, 1000);
    });
    return courseLoader;
  }
}
