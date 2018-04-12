/**
 * New typescript file
 */
import {CourseService} from './courses.service';
import {Component} from '@angular/core';

//here courses seletor will be like a tag <courses> to identify it.

//  '<h2>{{ "Title is # {" + getTitle() + "}"}}</h2>', {{}}  this way of using syntax is called String interpolation. 

/**
 * one way of defining the template 
 * 
  template : '<h2>Courses</h2><br/><h2>{{ "Title is # [" + title + "]"}}</h2>' + 
              '<h2>{{ "Title is # {" + getTitle() + "}"}}</h2>'  
 */

/**
 * to get these courses from server we need to define services.
 * which can be imlement in two ways
 * 
 * 1. write logic here in .ts file to consume or use the Http end point.
 *    (Logic for calling HTTP service) 
 *    Issue will be #this is like tight coupling, 
 *       component should not include any logic other than the displya logic.
 * 2. Separate class for defining the service.
 * 
 */

@Component({
  selector: 'courses',
  template: `
              <h2>Courses</h2><br/>
              <h2>{{ "Title is # [" + title + "]"}}</h2>
              <h2>{{ "Title is # {" + getTitle() + "}"}}</h2>
              <ul>
                <li *ngFor="let course of courses">
                  {{course}}
                </li>
              </ul>
              `
})
export class CoursesComponent {

  title = 'List of Courses';
  //courses = ['Course1', 'Course2', 'Course3'];
  courses;

  getTitle() {
    return "From Method getTitle() : " + this.title;
  }

  /**
   * Here we are creating an object directly here so
   * this is like an issue of Dependency injection since this is tightly coupled
   * so there is another way defined in Angular by creating the dependency object by framework itself
   * 1st way

  constructor() {
    let service = new CourseService();
    this.courses = service.getCourses();
  }
   */

  // 2nd way of Dependency injection using Angular way of through service.
  constructor(obj: CourseService) {
    this.courses = obj.getCourses();
  };

}



