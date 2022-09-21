import {Component, OnInit} from '@angular/core';
import { ApiService } from './api.service';


@Component({
    selector: 'quizzes',
    templateUrl: './quizzes.component.html'
})
export class QuizzesComponent {

    quiz = {id:0, title: ""}
    quizzes: any;

    constructor(public api:ApiService) {}

    ngOnInit() {
        this.api.getQuizzes().subscribe(res => {
            this.quizzes = res;
        })
    }
}