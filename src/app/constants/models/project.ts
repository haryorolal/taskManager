export class Project {
    constructor(
        public projectID: number = 0,
        public projectName: string = "",
        public dateOfStart: Date = new Date,
        public teamSize: number = 0,
        public active: boolean = false,
        public status: string = ""
    ) {}
}
