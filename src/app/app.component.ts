import { Component, OnInit } from '@angular/core';
import { animateStateTrigger, fade, itemStateTrigger, markedTrigger, slideStateTrigger } from './animations';
import { AnimationEvent } from '@angular/animations';

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
    slideStateTrigger,
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
  displayedCourses: Course[] = [];

  ngOnInit(): void {
    if (this.courses.length >= 1) {
      this.displayedCourses.push(this.courses[0])
    }
  }

  addCourse(course: Course) {
    this.courses.unshift(course);
  }

  onItemAnimated(animationEvent: AnimationEvent, lastCourseId: number) {
    if (animationEvent.fromState != 'void') {
      return;
    }
    if (this.courses.length > lastCourseId + 1) {
      this.displayedCourses.push(this.courses[lastCourseId + 1])
    }
    else {
      this.courses = this.displayedCourses;
    }
  }

  deleteCourse(index: number) {
    this.courses.splice(index, 1);
  }

  deleteCards(index: number) {
    this.cards.splice(index, 1);
  }
}
