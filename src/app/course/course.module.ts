import { NgModule } from '@angular/core';
import { CourseComponent } from './course.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CourseRoute } from './course.route';

@NgModule({
    declarations: [
        CourseComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild(CourseRoute)
    ],
    exports: [
        CourseComponent
    ]
})
export class CourseModule {
}
