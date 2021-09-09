import { Component, HostBinding, OnInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { markedTrigger, fade, animateStateTrigger, itemStateTrigger, slideStateTrigger, listStateTrigger } from '../animations';
import { Course, CourseDbService } from '../shared/course-db.service';
import { routeFadeStateTrigger, routeSlideStateTrigger } from '../shared/route-animations';

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
    routeFadeStateTrigger({ startOpacity: 0, duration: '3000ms' }),
    listStateTrigger,
  ]
})
export class HomeComponent implements OnInit {

  // @HostBinding('@routeFadeState') routeAnimation = true;

  markedPrjIndex = 0;
  markedCards = 0;
  isShown = false;
  width = 400;
  animate = false;
  cards = [1, 2, 3, 4];
  createNew = false;

  courses: Course[];

  constructor(
    private courseService: CourseDbService,
  ) {

  }

  ngOnInit(): void {
    this.courseService.loadCourses()
      .subscribe((courses: Course[]) => {
        this.courses = courses;
      });
  }

  addCourse(course: Course) {
    this.courses.unshift(course);
  }

  deleteCourse(index: number) {
    this.courses.splice(index, 1);
  }

  deleteCards(index: number) {
    this.cards.splice(index, 1);
  }

}
