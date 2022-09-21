import {Component, OnInit} from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'questions',
    templateUrl: './questions.component.html'
})
export class QuestionsComponent {

    question = {id:0, text: "",correctAnswer:"",answer1:"",answer2:"",answer3:""}
    questions: any;

    constructor(public api:ApiService, private route: ActivatedRoute) {}

    ngOnInit() {
        let quizId = Number(this.route.snapshot.paramMap.get('quizId'));
        
        this.api.getQuestions(quizId).subscribe(res => {
            this.questions = res;
        })
    }
}