import { Component, HostBinding, OnInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { markedTrigger, fade, animateStateTrigger, itemStateTrigger, slideStateTrigger } from '../animations';
import { Course, CourseDbService } from '../shared/course-db.service';
import { routeFadeStateTrigger } from '../shared/route-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    markedTrigger,
    fade,
    animateStateTrigger,
    itemStateTrigger,
    slideStateTrigger,
    routeFadeStateTrigger,
  ]
})
export class HomeComponent implements OnInit {

  @HostBinding('@routeFadeState') routeAnimation = true;

  markedPrjIndex = 0;
  markedCards = 0;
  isShown = false;
  width = 400;
  animate = false;
  cards = [1, 2, 3, 4];
  createNew = false;

  courses: Course[];
  displayedCourses: Course[] = [];

  constructor(
    private courseService: CourseDbService,
  ) {

  }

  ngOnInit(): void {
    this.courseService.loadCourses()
      .subscribe((courses: Course[]) => {
        this.courses = courses;
        if (this.courses.length >= 1) {
          this.displayedCourses.push(this.courses[0]);
        }
      })

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
