import { Component, OnInit } from '@angular/core';
import { CourseChapter, CourseDetails } from './course';
import { CourseService } from './course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './module-details.component.html',
    styleUrls: ['./module-details.component.css']
})
export class ModuleDetailsComponent implements OnInit {

    chapterName: CourseChapter;
    chapterNames: CourseChapter[];

    moduleDetail: CourseDetails;
    moduleDetails: CourseDetails[];
    constructor(private courseService: CourseService, private route: ActivatedRoute ) {}

    ngOnInit(): void {
        this.chapterName = new CourseChapter();
        this.courseService.findModuleByName().subscribe((data) => {
            this.chapterName = data;
            this.moduleDetails = this.chapterName[0].chaptermodule[0].moduleDetails;
            console.log(data);
            console.log(this.moduleDetails);
        });
    }
}
