import { Routes } from '@angular/router';
import { CourseComponent } from './course.component';
import { CourseChapterComponent } from './course-chapter.component';
import { ChapterModuleComponent } from './chapter-module.component';
import { ModuleDetailsComponent } from './module-details.component';

export const CourseRoute: Routes = [
{path : 'courses', component: CourseComponent},
{path: 'courses/chapter-list' , component: CourseChapterComponent},
{path : 'courses/chapter-list/module-list' , component : ChapterModuleComponent },
{path: 'courses/chapter-list/module-list/module-details', component: ModuleDetailsComponent }
];
