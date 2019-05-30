import { Component, OnInit } from '@angular/core';
import { CourseChapter, ChapterModule } from './course';
import { CourseService } from './course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl : './chapter-module.component.html'
})
export class ChapterModuleComponent implements OnInit {

    chapterName: CourseChapter;
    chapterNames: CourseChapter[];

    chapterModule: ChapterModule;
    constructor(private courseService: CourseService, private route: ActivatedRoute ) {}

    ngOnInit(): void {
        this.chapterName = new CourseChapter();
        this.chapterModule = new ChapterModule();

        this.courseService.findAllModule().subscribe((data) => {
          this.chapterName = data;
          console.log(data);
        });
    }
}
