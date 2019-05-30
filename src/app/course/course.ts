export class ChapterModule {
    ModuleName: string;
}

export class CourseChapter {
    chapterName: string;
    chapterModule: ChapterModule[];
}


export class Courses {
    courseName: string;
    courseChapter: CourseChapter[];
}
