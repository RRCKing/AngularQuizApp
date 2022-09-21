import {Component} from '@angular/core';
import { ApiService } from './api.service';


@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html'
})
export class QuizComponent {

    quiz = {id: 0, title: ""};

    constructor(public api:ApiService) {}

    ngOnInit() {
        // for quizzes list click one
        this.api.quizSelected.subscribe(quiz => this.quiz = quiz);
    }

    post(quiz: any){
        this.api.postQuiz(quiz)
    }
}